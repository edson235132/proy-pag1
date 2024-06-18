import React from 'react'

export default function Footer1() {
  return (
        <div className="bodyfooter">
        <div className="footer">
        <ul className="social-icon">
            <li className="icon-elem">
            <a href="" className="icon">
                <img style={{width: '35px', height: '35px'}} src="data:image/png;base64,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"></img>
            </a>
            </li>
            
            <li className="icon-elem">
            <a href="" className="icon">
                <img style={{width: '35px', height: '35px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2ZPUscURSGHwkiKeLHJjH+A3+DiBhts6mSdDb+BSPYilnEL2StksY0SZrtAiEhxe7WaYKN/yCQSnEdsQl65MIsrJeZnTubu+y5y7zwNss9c87D5dw5dxYKFSrUq14CTeAKkAH7CmgA5bwQ2wqKlxRX8uyEKHfZBaSpoFDJcN0FJFJQqGT40gVEAnGmBl2gaAeZtvL8GhaQ/WEBmQX+hQjyNCHXboggTxJyPQBqwwBiNAKsA61QQB5n5B0HVoAj4FYzSAl33WgGmbLyrIUKUrLymHnpbdwjQe9IFP/+E3huAd0MCsScOIfAYseLz56iJ1NA2v4T3wJrg2r2zylHa16QvPYKstXlOXahE1pBvmQ8JwiQVsrs9Br4BpwkNOy4RpBqQtz7jBiVIMtWzCuHmEcaQWasmK+hgoxaMb8dYh5aMdcaQJ7l3JG/1vqJ/4QQXyBLOXvknbV+TgtINSHuQ8raH8CYtXZHC0gr5T3yBvgOnMbD4Gp8ne2UGR7PtIBIPGP1omMPEOITxHgzJ8SGJwjxDWL8qcuHhbbMpeqjRwjpB4jxBXAALHTcBE0vzAN7wLlnCOkXiG2Xi1EQIKIBJFJQpDgc/5lqKChUfPz1VlZQqGT4BY6qKChWHOc2p52pK+mZKK7FeScKFSrEPd0Bxx7VAwDpFdUAAAAASUVORK5CYII="/>
            </a>
            </li>
            <li className="icon-elem">
            <a href="https://www.google.com/maps" className="icon" target='_blank'>
                <img style={{width: '35px', height: '35px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcklEQVR4nO2WfWwTZRzHL5rwF3/6H/zhWxSXOJPtbtO53sEYiQhRJq6LgRENQzAqM+qSRWEal8BAEWOIbCZg5t7MENkgmca2GwRI17dtDe1dhTmYW1e2wbpmmy9byc88j7b06L09115dYn/JN22uT9LP5/nd756jqGz9j8uXk7PCb6IrBJZu51kmILDMPMo/3+n2AMuY0RpqOZawlt7Kc8yvAseAUniWGeZZ+iVquRSUl9/Pc/RnauBCssinQFH3/df8lB54IR76kOY/yuksX7GqseLQqibzxOqmCkhHXtm3WSc4E4+fK9iiSWB1k7khXeAoD35lBtumopQFeI4e0TTYUjtf1PE2tAlWmJi/DUt3ovizhbfA0+1vqQps+2CTIpizOB+6mFwcZ3Ge4toAV1CuoQNigMqegzC/+AdI1djcNDx6olJR4PiOdbJAZ5lcqH38Eah57GEc9B1dU+hCK5HAsx174/A3IjfhvfONsKVrP/4cmhqGjadrVTtg3Vwku/O1CfCJEnKdQOcEkUC7YIvDrzn5qq4ZGFhfKAlzhslNgo+li3lSugssM0ckcHNhBgugHY9dK+v+CA442kTZbflcVsBbUiAJ06Ug0C0nwDELRAJoYFGh2yZ27ajn+6RZcISE5XkLheZvY8D3L9ztwGs/HYZW3opzdWYM/24Z9cgKHNlZQjTE5wqUhphp1DUDo5FJWPONeAaeat4Fkwth/HuDo0NWgGsoU3mM5uF7HsWl8hjlTfl5RALo+R97CiGJmgtNUNZdB++ePw4jsyF8Hf2e37JHcZC/M5tSPsgElraqwt8rgLK95wDMLf4ueQ4s3lmCPZajivAPfW2Gvu4SCJSmcAqzzJ+/sIVP6BJAQScuOnmDc7fgr+giPsB+uHZR9RxA8JbLGwAEE9z64pkUOkDXaIKXE9CTRHgcvwl+e6OQfPc5pofoddoQ+H8TdRbD1Re1v9j5XyiFAJf/gGb4dAjIwaNEfFUw2NkM/Frpw02UdYUw0NECRPCpCqjBezyXweV2gLd+n6qAt34/XpsxAa3wOP2XwP+y/Gs2v/V5vCZjAkrwSyPVMBG8Dm6P866A2wEDbc2yAoOtJ+PrDBdQgw/PTEI4HIZgcDxJwrerMgne9/oO0RpDBbTCxxKcCIokBr49obj7hgoowbt6q8HqmRLBxyUSO+HqF80CvvedduMFlOAdtmoorZuG9XUR+Nk9qyrhbfgkLjB0uF4Eb4iAFnj2wwiOFgnP2dNxAc+5M8YKkMBrlnA7QHiOA2Eji28pwwT0wGuV8FVtA1/V9iT4tAmkAq9FYuTLI+A9+LExAumAJ5kJVzoF0gmvV4LSK2AEvBaJ8XskdAkYCU8qQZFWJuBZDRJj42NYgligTxb+nbTCs3GJWegdlJa4Pj5KLjDl5aJG7zwr2YlkgWuhG1FigR8vbbAnwvfb9hoKzyZ0wjYoFjh1pddOLHCsj1uJJFAn7L1vZgSeTZCwDk3DcGg0euqKzX7M17mSWCBb2cpWtqhM1N/zqhV03khKRQAAAABJRU5ErkJggg=="/>
            </a>
            </li>
        </ul>
        <ul className="menu">
            <li className="menu-elem">
            <a href="" className="menu-icon"> Telefono </a>
            </li>
            <li className="menu-elem">
            <a href="" className="menu-icon"> Equipo </a>
            </li>
            <li className="menu-elem">
            <a href="" className="menu-icon"> Contacto </a>
            </li>
            <li className="menu-elem">
            <a href="" className="menu-icon"> Correo </a>
            </li>
            <li className="menu-elem">
            <a href="" className="menu-icon"> Sobre Nosotros </a>
            </li>
        </ul>
        <p className="text">@2024 | Todos los derechos reservados</p>
        </div>
        <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
    </div>
  )
}