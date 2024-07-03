import { Link } from 'react-router-dom'
import projects from './bots.json'
import folderPasteBotImage from '../../images/icons_ubuntu/256x256/places/folder-paste-image-bot.png'
import folderPastePrivateImage from '../../images/icons_ubuntu/256x256/places/folder-paste-image-private.png'

export default function Botofolio() {
    return (
        <div className="explorer-list-files">
            {projects.map((project) => (
				// Дописать идею с картинками для файлов, либо сделать просто картинки, пихуй
                <div key={project.name} className="explorer-folder-block">
                    <Link to={project.url} target={project.url ? "_blank" : "_self"} type={project.type}>
                        {
                            !project.image ? <div className={`${!project.isPrivate ? "folder-bot" : "folder-bot-private"} folder`}></div> :
                            <div className="folder" style={{
                                backgroundImage: `url(${project.isPrivate ? folderPastePrivateImage : folderPasteBotImage}), url(${project.image})`,
                                backgroundPosition: "center center, 83% 21%",
                                backgroundSize: "cover, 59%"
                            }}></div>
                        }

                        <span className="title">{project.name}</span>
                    </Link>

                </div>
            ))}
			<div className="explorer-folder-block">
				<Link>
					<div className='folder-text folder'></div>
					<span className="title">Здесь-не-все-проекты.txt</span>
				</Link>
			</div>
            <div className="explorer-folder-block">
				<Link to="https://github.com/febdaynik-bots">
					<div className='folder-text folder'></div>
					<span className="title">Github-bots.link</span>
				</Link>
			</div>
        </div>
    )
}
