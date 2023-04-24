import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label?: string;

    /**
     * Este es el tamaño en la etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';

    /**
     * Si quiere todo capitalizado
    */
    AllCaps?: boolean;

    /**
     * Colores básicos del bóton
    */
    color?: 'primary'|'secondary'|'tertiary';

    /**
     * Color personalizado de la fuente
    */
    fontColor?: string;

    /**
     * Color personalizado de la fuente
    */
    backgroundColor?: string;
}

export const MyLabel = ({
    AllCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps ) => {
    return (
        <span 
            className={`label ${ size } text-${ color }` }
            style={{ color: fontColor, backgroundColor }}>
            { AllCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel;