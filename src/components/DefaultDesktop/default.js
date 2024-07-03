import { Link } from 'react-router-dom';
import folders from './folders.json'


export default function DefaultExplorerComponent() {
    return (
        <div className="explorer-list-files">
            {folders.map((block) => (
                <div key={block[0]} className="explorer-folder-block">
                    <Link to={block[0]}>
                        <div className={`${block[2]} folder`}></div>
                        <span className="title">{block[1]}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}