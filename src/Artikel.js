import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';

export function Tentang(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.judul}>COVID 19</Text>
                    <Text style={styles.txt}>
                        Covid19 (atau yang lebih dikenal sebagai coronavirus) merupakan virus yang dapat menginfeksi sistem pernapasan.
                    </Text>
                    <Text style={styles.txt}>
                        Virus ini dapat menyebabkan infeksi pernapasan ringan, seperti flu serta dapat menyebabkan infeksi pernapasan berat, seperti infeksi paru-paru (pneumonia), Middle-East Respiratory Syndrome (MERS), dan Severe Acute Respiratory Syndrome (SARS).
                    </Text>
                    </View>
            </ScrollView>
        </View>
    )
}

export function Gejala(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.judul}>GEJALA VIRUS CORONA</Text>
                    <Text style={styles.txt}>
                        Gejala virus corona umumnya muncul dalam waktu 2 sampai 14 hari setelah korban diduga terkena virus corona.
                    </Text>
                    <Text style={styles.txt}>
                        Gejala awal dari virus ini biasanya berupa demam, pilek, batuk kering, sakit tenggorokan, serta sakit kepala.
                    </Text>
                    <Text style={styles.txt}>
                        Setelah itu, korban dapat mengalami demam tinggi, sesak napas, dan nyeri di dada.
                    </Text>
                    <Text style={styles.txt}>
                        Oleh karena itu, secara umum gejala dari virus corona ada 3 yaitu:
                    </Text>
                    <Unorderedlist style={{fontSize: 20}}>
                        <Text style={styles.txtList}>
                            Demam
                        </Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 20}}>
                        <Text style={styles.txtList}>
                            Batuk
                        </Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 20}}>
                        <Text style={styles.txtList}>
                            Sesak Napas
                        </Text>
                    </Unorderedlist>
                </View>
            </ScrollView>
        </View>
    )
}

export function Penyebab(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.judul}>PENYEBAB TERTULAR</Text>
                    <Text style={styles.txt}>
                        Seseorang dapat tertular virus Covid19 karena: 
                    </Text>
                    <Unorderedlist style={{fontSize: 50}}>
                        <Text style={styles.txtList}>
                            Tidak sengaja terkena percikan ludah (droplet) yang keluar saat penderita Covid19 batuk atau bersin
                        </Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 50}}>
                        <Text style={styles.txtList}>
                            Memegang mulut atau hidung setelah menyentuh benda yang terkena cipratan ludah penderita Covid19 tanpa mencuci tangan terlebih dahulu
                        </Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 50}}>
                        <Text style={styles.txtList}>
                            Tidak sengaja / sengaja terkena kontak langsung dengan penderita Covid19
                        </Text>
                    </Unorderedlist>
                </View>
            </ScrollView>
        </View>
    )
}

export function Pencegahan(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.judul}>MENCEGAH COVID19</Text>
                    <Text style={styles.txt}>
                        Berikut langkah-langkah sederhana untuk mencegah penularan virus corona:  
                    </Text>
                    <Text style={styles.txtListJudul}>
                        1. Rutin mencuci tangan
                    </Text>
                    <Text style={styles.txtList}>
                        Selalu ingat untuk mencuci tanganmu dengan sabun dan air mengalir selama minimal 20 detik. Bila tak ada sabun dan air, dapat menggunakan hand sanitizer yang mengandung alkohol sekitar 60%. Hal ini dapat membantu membunuh virus yang berada di tangan kamu. 
                    </Text>
                    <Text style={styles.txtListJudul}>
                        2. Terapkan Physical Distancing
                    </Text>
                    <Text style={styles.txtList}>
                        Selama pandemi ini terus berlangsung, disarankan untuk melakukan physical distancing, yaitu menjaga jarak aman secara fisik minimal 2 meter dengan orang lain.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        3. Hindari memegang mata, hidung, dan mulut
                    </Text>
                    <Text style={styles.txtList}>
                        Kita tidak pernah tahu apakah tangan kita terdapat virus atau tidak. Untuk mencegahnya, jangan memgang mata, hidung, dan mulut selama belum mencuci tangan. 
                    </Text>
                    <Text style={styles.txtListJudul}>
                        4. Tutup mulut ketika bersin dan batuk
                    </Text>
                    <Text style={styles.txtList}>
                        Kita tidak pernah tahu apakah tangan kita terdapat virus atau tidak. Untuk mencegahnya, jangan memgang mata, hidung, dan mulut selama belum mencuci tangan. 
                    </Text>
                    <Text style={styles.txtListJudul}>
                        5. Tetap di Rumah
                    </Text>
                    <Text style={styles.txtList}>
                        Meskipun merasa sehat, kamu tidak tahu apakah kamu membawa virus tersebut atau tidak. Bisa saja kamu menjadi penular bagi orang lain yang daya tahan tubuhnya lebih rendah daripada kamu. Oleh sebab itu tetap #dirumahaja ya!
                    </Text>
                    <Text style={styles.txtListJudul}>
                        6. Bersihkan permukaan yang sering disentuh
                    </Text>
                    <Text style={styles.txtList}>
                        Barang-barang yang biasanya kita sentuh mungkin banyak virus yang menempel pada barang tersebut. Contohnya adalah meja, gagang pintu, handphone, dll. Oleh sebab itu, selalu rawat benda-benda di sekitarmu ya!
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#bce1ea'
    },
    content: {
        margin: 20,
        backgroundColor: "#ecf0f1",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    judul: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10
    },
    txt: {
        textAlign: 'justify',
        fontSize: 20
    },
    txtList: {
        textAlign: 'justify',
        fontSize: 20
    },
    txtListJudul: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    }
})