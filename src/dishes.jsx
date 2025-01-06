function Dips() {
    let dippsås = [
        { name: "sweet chili", price: 19 },
        { name: "sweet & sour", price: 19 },
        { name: "guacamole", price: 19 },
        { name: "wonton std", price: 19 },
        { name: "hot mango", price: 19 },
        { name: "chili mayo", price: 19},
    ];

    return (
        <div>
            <h3>Dippsåser</h3>
            <div className="dips">
                {dippsås.map((dipp, index) => (
                    <button key={index} className="dip-button">{dipp.name}</button>
                ))}
            </div>
        </div>
    );
}

function Meny() {
    let dishes = [
        { name: "Karlstad", price: 9, desc: "kantarell, scharlottenlök, morot, bladpersilja" },
        { name: "Bangkok", price: 9, desc: "morot, salladslök, chili, kokos, lime, koriander" },
        { name: "Ho Chi Minh", price: 9, desc: "kål, salladslök, chilivitlök, ingefära, tofu" },
        { name: "Paris", price: 9, desc: "kål, chevré, honung, basilika, valnötspasta" },
        { name: "Oaxaca", price: 9, desc: "majs, tomat, rostade ärtor, vitlök, lime" },
        { name: "Dippsås", price: 19 }
    ];

    return (
        <div>
            <h1>Meny</h1>
            <div className="dishes">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish">
                        <div className="nameDesc">
                            <h2>{dish.name}</h2>
                            <p>{dish.desc}</p>
                        </div>
                        <p>{dish.price} kr</p>
                    </div>
                ))}
            </div>
            {/* Inkludera Dips-komponenten */}
            <Dips />
        </div>
    );
}

export default Meny;    