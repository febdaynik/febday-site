import '../../../styles/desktopPanel.css'
import TerminalComponent from './terminal'
import ExplorerComponent from './explorer'

export function onStartDraggable(event) {
    if (event.target.offsetParent) {
        document.querySelectorAll('.visual-draggable-block').forEach((element) => {
            if (element !== event.target.offsetParent) 
                element.style.zIndex = null
        })
        event.target.offsetParent.style.zIndex = 5
    }
}

export default function DesktopPanelComponent() {
    const gridLayout = Array.from({ length:  100}, (_, i) => i + 1)

    return (
       <>
        <ExplorerComponent/>
        <TerminalComponent />
        <div className="desktop-panel">
            {gridLayout.map((index) => {
                return (index === 11 ? 
                <div key={index}>
                    <div className="folder-block">
                        <div className="folder-user-home folder" />
                        <span className="title">Домашняя папка</span>
                    </div>
                </div> : <div key={index}/>)
            })}
        </div>
       </>
    )
}