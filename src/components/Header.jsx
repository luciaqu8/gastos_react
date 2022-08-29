import React from 'react'
import ControlPre from './ControlPre'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({ 
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto, 
    isValidPre, 
    setIsValidPre
}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>


        {isValidPre ? (
            <ControlPre 
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPre={setIsValidPre}
            />
        ) : ( 
        <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPre={setIsValidPre}
        />
        )}
    </header>
  )
}
