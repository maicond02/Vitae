import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Lista from './Ongs'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: '1',
                    nome: 'Ong ajuda solitária',
                    descricao: 'Seja um doador ativo!',
                    profileDescription: 'A "ONG Ajuda Solidária" é uma organização sem fins lucrativos, comprometida em promover apoio e assistência a indivíduos em situação de vulnerabilidade. Nossa missão é proporcionar recursos, capacitação e suporte emocional, visando à reintegração social e ao fortalecimento do potencial individual. Por meio de doações, parcerias e o trabalho dedicado de voluntários, buscamos transformar vidas, estabelecer pontes de solidariedade e construir um futuro mais digno para todos aqueles que atendemos. Junte-se a nós e faça parte dessa rede de amor e cuidado!',
                    imgperfil: 'https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-de-raca-discriminacao-racial-direitos-humanos-cor-da-pele-diversidade-humana-codigo-genetico-racismo-e-igualdade-racial-no-local-de-trabalho-metafora-abstrata-de-justica-social_335657-1938.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    imgPublicacao: 'https://img.freepik.com/vetores-gratis/pare-o-conceito-de-ilustracao-de-racismo_23-2148576603.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    likeada: false,
                    likers: 0
                },
                {
                    id: '2',
                    nome: 'Vida Verde Conservação',
                    descricao: 'Seja um voluntário!',
                    profileDescription: ' A Vida Verde Conservação é uma organização não-governamental dedicada à proteção e à restauração de ecossistemas naturais. Com projetos que vão desde o reflorestamento até a educação ambiental, a Vida Verde trabalha para promover a biodiversidade e o uso sustentável dos recursos naturais. Através de parcerias com comunidades locais, esta ONG busca não apenas preservar habitats, mas também melhorar o bem-estar das pessoas que dependem diretamente do meio ambiente.',
                    imgperfil: 'https://img.freepik.com/vetores-gratis/maos-que-ligam-logotipo_23-2147507857.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    imgPublicacao: 'https://img.freepik.com/fotos-gratis/juventude-que-limpa-floresta-do-lixo_23-2147826367.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    likeada: false,
                    likers: 0
                },
                {
                    id: '3',
                    nome: 'Alcance Educativo',
                    descricao: 'Ajude milhares de pessoas sem condições para o estudo',
                    profileDescription: 'Alcance Educativo tem a missão de transformar vidas por meio da educação. Esta ONG apoia crianças e jovens em comunidades carentes, fornecendo acesso a material didático de qualidade, infraestrutura escolar e programas de tutoria. Seu objetivo é nivelar o campo de jogo educacional, garantindo que todos tenham as mesmas oportunidades de aprender, crescer e alcançar seu pleno potencial.',
                    imgperfil: 'https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-de-participacao-social-engajamento-social-trabalho-em-equipe-participacao-da-sociedade-civil-voluntarios-felizes-pessoas-de-caridade-limpar-o-lixo-plantar-arvores-metafora-abstrata_335657-3989.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    imgPublicacao: 'https://img.freepik.com/vetores-premium/ilustracao-plana-para-a-temporada-de-volta-as-aulas_23-2150566624.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    likeada: false,
                    likers: 3
                },
                {
                    id: '4',
                    nome: 'Saúde para Todos',
                    descricao: 'Ajude milhares de pessoas com problemas de saúde!',
                    profileDescription: ' Saúde para Todos é uma ONG que acredita que o acesso à saúde é um direito humano fundamental. Com programas que vão desde clínicas móveis até campanhas de vacinação e educação para a saúde, esta organização trabalha incansavelmente para levar cuidados médicos a regiões onde o sistema de saúde é inacessível ou inexistente. Através de iniciativas de saúde preventiva e tratamentos, a Saúde para Todos visa criar comunidades mais saudáveis e resilientes.',
                    imgperfil: 'https://img.freepik.com/vetores-gratis/conceito-de-ajuda-humanitaria-com-as-maos_23-2148503321.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais',
                    imgPublicacao: 'https://img.freepik.com/fotos-premium/dia-internacional-da-enfermeira_866580-159.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais',
                    likeada: false,
                    likers: 1
                },
                {
                    id: '5',
                    nome: 'Abrigo Animal Amigo',
                    descricao: 'Adote um amigo !',
                    profileDescription: ' Abrigo Animal Amigo é uma ONG que dedica seus esforços ao resgate, reabilitação e relocação de animais abandonados e em situação de risco. Com uma rede de voluntários apaixonados e clínicas veterinárias parceiras, a organização também promove a conscientização sobre a posse responsável de animais. O compromisso do Abrigo Animal Amigo é garantir que cada animal seja amado e cuidado, encontrando um lar seguro e amoroso.',
                    imgperfil: 'https://img.freepik.com/vetores-gratis/ilustracao-de-resgate-de-animais-desenhados-a-mao_52683-109643.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais',
                    imgPublicacao: 'https://img.freepik.com/fotos-gratis/mulher-interagindo-com-caes-de-resgate-no-abrigo_23-2148682952.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais',
                    likeada: false,
                    likers: 32
                }
            ]
        };
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StartScreen')}
                    >
                        <Image
                            source={require('../img/logo.png')}
                            style={styles.logo} />
                    </TouchableOpacity>


                </View>

                <View style={styles.sizeFlatList}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyboardDismissMode={(item) => item.id}
                        data={this.state.feed}
                        renderItem={({ item }) => <Lista data={item} navigation={this.props.navigation} />} // Adicione a propriedade navigation aqui
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
        borderTopWidth: 2,
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        elevation: 1,
        // Para iOS:
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    send: {
        width: 23,
        height: 23
    },
    logo: {
        width: 23,
        height: 23
    },
    sizeFlatList: {
        height: 740
    }

});

export default Home;
