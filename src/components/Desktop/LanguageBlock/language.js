import { useState } from "react"

export default function LanguageComponent() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <div className="language-block hover-header" onClick={() => setModalActive(modalActive ? false : true)}>
                <span>en</span>
            </div>

            <div className={modalActive ? "language-modal active" : "language-modal"}>
                <table className="language-modal-table">
                    <tbody>
                        <tr>
                            <td>Английский (США)</td>
                            <td>en</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
