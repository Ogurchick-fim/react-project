import "./index.css"

export function Button(props){
    const {variant = "primary",children} = props
    const className = `my-buttin my-buttin--${variant}`
    return(
        <button className={className }>{children}</button>
    )
}