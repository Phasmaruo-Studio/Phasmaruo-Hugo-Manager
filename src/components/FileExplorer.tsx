import "./FileExplorer.css"
import { dialog, fs } from "@tauri-apps/api"

async function OpenProject(propsop: any) {
    //document.getElementById("openproject")?.classList.add("buttonloading")
    const selected = await dialog.open({
        directory: true,
        multiple: false,
    });

    propsop = selected;

    if (selected != null){
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
}

const FileExplorer = (props: any) => {
    if (props.dir != null && props.dir != ""){
        return (
            <div className="outdiv">
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
                    <button onClick={() => OpenProject(props.dir)} id="openproject">Open Project</button>
                </div>
            </div>
        )
    }
}

export default FileExplorer;