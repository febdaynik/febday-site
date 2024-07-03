import { Link } from 'react-router-dom';


export default function DefaultExplorerComponent() {
    const folders = [
        ['botofolio', 'Ботофолио', 'folder-default'],
        ['about', 'Обо мне', 'folder-default'],
        ['contact', 'Контакты', 'folder-default'],
        ['trash', 'Корзина', 'folder-user-trash'],
    ];

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