function CareScale({ scaleValue, careType }) {

    const range = [1, 2, 3]

    // Si le type est light, on affiche le soleil sinon la goutte d'eau
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem
                    ? <span key={rangeElem.toString()}>{scaleType}</span>
                    : null
            )}
        </div>
    )
}

export default CareScale