import "./FileExplorer.css"
import { dialog, fs } from "@tauri-apps/api"

async function OpenProject() {
    const selected = await dialog.open({
        directory: true,
        multiple: false,
    });
    const entries = await fs.readDir(selected as string);

    function processEntries(entries: any) {
        for (const entry of entries) {
            console.log(`Entry: ${entry.path}`);
            if (entry.children) {
                processEntries(entry.children)
            }
        }
    }

    processEntries(entries)
}

const FileExplorer = (props: any) => {

    if (props.dir != ""){
        return (
            <div>
                NODEVELOP
            </div>
        )
    } else {
        return (
            <div className="outdiv">
                <h2>No Project Opened</h2>
                <div>
                    <h4>You have not yet opened a project.</h4>
                    <button>New Project</button><br />
                    <button onClick={() => OpenProject()}>Open Project</button>
                </div>
            </div>
        )
    }
}

export default FileExplorer;