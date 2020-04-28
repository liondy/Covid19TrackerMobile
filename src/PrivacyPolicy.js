import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

function PrivacyPolicy(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.judul}>Kebijakan Privasi</Text>
                    <Text style={styles.txt}>
                        Berikut kebijakan privasi yang disediakan oleh kami: 
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Kebijakan Privasi
                    </Text>
                    <Text style={styles.txtList}>
                        Aplikasi Covid 19 Tracker dibuat oleh seorang developer bernama Michael Liondy sebagai aplikasi yang gratis serta open source. Aplikasi ini disediakan tanpa dikenakan biaya apapun dan diperuntukkan melihat situasi virus corona dari seluruh dunia saat ini. Aplikasi ini dibuat sebagai bentuk bantuan dari saya sebagai seorang developer untuk membantu melihat, memantau keadaan dunia saat ini, sehingga tidak ada sama sekali niat untuk mengambil untung dari aplikasi ini.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Informasi yang Diambil dan Dipakai
                    </Text>
                    <Text style={styles.txtList}>
                        Untuk pengalaman yang lebih baik serta menumbuhkan rasa saling percaya, saya meminta Anda untuk melihat pernyataan ini. Kami tidak mengambil data apapun, Aplikasi ini sepenuhnya hanya diperuntukan melihat perkembangan covid 19 di seluruh dunia, kami hanya membutuhkan Anda menyalakan koneksi internet Anda agar Anda dapat melihat perkembangan virus corona secara real-time dari seluruh dunia.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Penyajian Data
                    </Text>
                    <Text style={styles.txtList}>
                        Data yang disajikan diambil dari data open-source dan sama sekali tidak mencuri data. Data yang disajikan diambil dari https://coronavirus-19-api.herokuapp.com/ serta untuk pengambilan artikelnya diambil dari website halodoc. Semua source code dapat dilihat di https://github.com/liondy/Covid19TrackerMobile secara open-source.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Link ke Situs lain
                    </Text>
                    <Text style={styles.txtList}>
                        Service yang kami berikan tidak memberikan link kepada situs lain. Link yang ada hanya link ke API untuk penyajian data saja dan itu sama sekali aman.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Privasi Anak-Anak
                    </Text>
                    <Text style={styles.txtList}>
                        Anak-anak dapat secara aman memakai aplikasi ini. Tidak ada data yang diambil dari anak-anak, tetapi untuk berjaga-jaga, tidak disarankan untuk anak di bawah 13 tahun untuk menggunakan aplikasi ini. Anak-anak disarankan untuk menggunakan aplikasi ini bersama orang tuanya.
                    </Text>
                    <Text style={styles.txtListJudul}>
                        Kontak Kami
                    </Text>
                    <Text style={styles.txtList}>
                        Apabila ada pertanyaan mengenai privacy policy, jangan sungkan untuk mengontak saya melalui email michaelliondy05@gmail.com
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

export default PrivacyPolicy;