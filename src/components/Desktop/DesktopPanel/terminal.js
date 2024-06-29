import Draggable from 'react-draggable';

export default function TerminalComponent() {
    return (
        <Draggable 
            handle=".terminal-header-block"
        >
            <div className="terminal-block">
                <div className="terminal-header-block">
                    <span className="terminal-header-title">root@febday: ~</span>
                    <div className="action-button-block">
                        <div className="-button">─</div>
                        <div className="-button">◻</div>
                        <div className="-button">✕</div>
                    </div>
                </div>
                <div className="terminal-textarea">
                    <p><span className="terminal-green">root@febday</span>:<span className="terminal-blue">~</span>$ ls</p>
                    <p className="command-ls"><span className="terminal-blue">Видео     Загрузки    Музыка    Документы</span></p>
                    <p><span className="terminal-green">root@febday</span>:<span className="terminal-blue">~</span>$</p>
                </div>
            </div>
        </Draggable>
    )
}