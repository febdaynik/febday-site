import "../../styles/buttonAnimate.css"

const clickButton = (checked) => {
    console.log('button', checked, Number(!checked))
    localStorage.setItem('animate', Number(!checked))    
}

export default function ButtonAnimate() {
    const storage = localStorage.getItem('animate') || 1;

    return (
        <section className="button-animate-state">
            <label className="switch">
                <input type="checkbox" defaultChecked={!Boolean(Number(storage))} onChange={e => clickButton(e.target.checked)} />
                <div className="slider"/>
            </label>
        </section>
	);

}
