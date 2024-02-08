import "./ControlPage.css"

export default function ControlPage() {
    return (
        <div>
            <div className="localfunc">
                <button disabled>Create a new blog</button>
                <button disabled>Edit setting file</button>
                <button disabled>Use another template</button>
                <button disabled>Choose behave in server</button>
            </div>
            <div className="uploadfunc">
                <button disabled>UPLOAD TO SERVER</button>
            </div>
        </div>
    )
}