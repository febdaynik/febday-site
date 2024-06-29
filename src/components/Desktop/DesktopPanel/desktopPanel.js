import '../../../styles/desktopPanel.css'
import TerminalComponent from './terminal'

export default function DesktopPanelComponent() {
    const gridLayout = Array.from({ length:  100}, (_, i) => i + 1)

    return (
       <>
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