import { isValidElement, useState } from "react"
import { TextInput, Text, View, Button } from "react-native"
import imcStyles from "./styles"

const Calculo = () => {
    const [ distancia, setDistancia ] = useState('')
    const [ quantidade, setQuantidade ] = useState('')
    const [ media, setMedia ] = useState<number>()


    const calculate = () {
        const fDistancia = parseFloat(distancia)
        const fQuantidade = parseFloat(quantidade)
        
        const mediaCombustivel = fDistancia / fQuantidade
        setMedia(mediaCombustivel)
    } 

    const formatNumber = (value: number) : string => {
        const fmt = new Intl.NumberFormat('pt-BR', {
            maximumFractionDigits: 1,
            maximumSignificantDigits:1
        })
        return fmt.format(value)
    }


    return( 
        <>
        <View style={imcStyles.container}>
            <Text>Km percorrido</Text>
            <TextInput placeholder="Informe o km do veiculo" onChangeText={setDistancia}/>
            <Text>Quantidade abastecida</Text>
            <TextInput placeholder="Informe o quantidade de litros abastecida" onChangeText={setQuantidade}/>
            <View>
            <Text>A media de km é de:</Text>      
            <Text>99,99</Text>      
            <Text>km/l</Text>            

            </View>
            <View style={imcStyles.container}>

            </View>
            <Button title="Calculate"/>

        </View>
        </>
    )
}

export default Calculo