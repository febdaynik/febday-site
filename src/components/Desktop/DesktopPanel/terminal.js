import Draggable from 'react-draggable';
import { onStartDraggable } from './desktopPanel';

export default function TerminalComponent() {
    return (
        <Draggable 
            handle=".terminal-header-block"
            onStart={onStartDraggable}
        >
            <div className="terminal-block visual-draggable-block">
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
                    <p className="command-ls"><span className="terminal-blue">Ботофолио &ensp;&ensp; 'Обо мне' &ensp;&ensp; Контакты</span></p>
                    <p><span className="terminal-green">root@febday</span>:<span className="terminal-blue">~</span>$</p>
                </div>
            </div>
        </Draggable>
    )
}