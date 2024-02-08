import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { useEffect } from "react";
import { FitAddon } from "xterm-addon-fit";
import { invoke } from "@tauri-apps/api";
import { WebLinksAddon } from "xterm-addon-web-links";

function WebTerminal() {
  useEffect(() => {
    const terminalElement = document.getElementById("terminalpg")
    const fitAddon = new FitAddon();
    const term = new Terminal({
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontWeight: 400,
      fontSize: 14,
      rows: 200,
    });
    term.loadAddon(fitAddon);
    term.loadAddon(new WebLinksAddon())
    //@ts-ignore
    term.open(terminalElement);
    async function fitTerminal() {
      fitAddon.fit();
      void invoke<string>("async_resize_pty", {
        rows: term.rows,
        cols: term.cols,
      });
    }
    function writeToTerminal(data: string) {
      return new Promise<void>((r) => {
        term.write(data, () => r());
      });
    }
    function writeToPty(data: string) {
      void invoke("async_write_to_pty", {
        data,
      });
    }
    function initShell() {
      invoke("async_create_shell").catch((error) => {
        term.writeln("Hello dear user, there is a bug in this Terminal component.")
        term.writeln("In testing, this bug was found but not fixed. After we failed to fix it, we decided to output this message directly in the terminal.")
        term.writeln("If you are testing as a developer and you have a good idea to fix it, please submit a Pull Request to us.")
        term.writeln("https://github.com/Phasmaruo-Studio/Phasmaruo-Hugo-Manager/")
        term.writeln("We apologize for any inconvenience caused to your use.")
        term.writeln("\x1b[31mError: " + error + "\x1b[0m")
      });
    }
    async function readFromPty() {
      const data = await invoke<string>("async_read_from_pty");
    
      if (data) {
        await writeToTerminal(data);
      }
    
      window.requestAnimationFrame(readFromPty);
    }
    initShell();
    term.onData(writeToPty);
    addEventListener("resize", fitTerminal);
    fitTerminal();
    window.requestAnimationFrame(readFromPty);
  }, []);
  return <div id="terminalpg"></div>;
}

export default WebTerminal;