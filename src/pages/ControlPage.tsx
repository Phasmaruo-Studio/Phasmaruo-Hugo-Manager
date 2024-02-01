import "./ControlPage.css"

export default function ControlPage() {
    return (
        <div>
            <div className="localfunc">
                <button>Create a new blog</button>
                <button>Edit setting file</button>
                <button>Use another template</button>
                <button>Choose behave in server</button>
            </div>
            <div className="uploadfunc">
                <button>UPLOAD TO SERVER</button>
            </div>
        </div>
    )
}