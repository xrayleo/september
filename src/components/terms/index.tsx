import { useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    bgcolor: "background.paper",
    borderTop: "2px solid #000",
    boxShadow: 24,
    color: "rgb(126, 34, 92)",
    p: 4,
    overflowY: "auto",
};

export default function TermsModal(props: {
    isOpenTerms: boolean;
    onTerms: any;
    termDetails: string
}) {
    //国际化
    const { t } = useTranslation();

    return (
        <div>
            <Modal open={props.isOpenTerms}>
                <Box sx={style}>
                    <Stack alignItems="end" sx={{ transition: "translateX(10px)",zIndex: "100" }}>
                        <CloseIcon sx={{color: "rgb(126, 34, 92)",fontSize: "1.8rem",cursor: "pointer"}} onClick={() => props.onTerms(false)}/>
                    </Stack>
                    <div dangerouslySetInnerHTML={{__html: props.termDetails}}></div>
                    {/* <Typography fontWeight="bold" marginTop="15px" variant="h5" component="h3">Syarat dan Ketentuan</Typography>
                    <Typography sx={{mt: 2,textDecoration: "underline",lineHeight: "1.3rem",fontSize: "1.2rem",}}>TIDAK PERLU PEMBELIAN UNTUK MENGIKUTI ATAU MENANG.</Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        1. Deskripsi Promosi: “Hadiah Ulang Tahun Enrich ke-15:
                        Menangkan - Kuis Literasi Keuangan Online”
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        Dengan berpartisipasi dalam Hadiah Ulang Tahun Enrich
                        ke-15: Menangkan - Kuis Literasi Keuangan Online
                        (“Kuis”), setiap peserta menerima dan setuju tanpa
                        syarat untuk mengikuti dan mematuhi Aturan Resmi ini dan
                        keputusan Enrich yang bersifat final dan mengikat dalam
                        segala hal. Enrich bertanggung jawab atas pengumpulan,
                        pengiriman, dan pemrosesan Pendaftaran dan administrasi
                        hadiah secara keseluruhan. Peserta harus merujuk pada
                        Enrich saja untuk pertanyaan, komentar, atau masalah apa
                        pun yang terkait dengan Kuis.
                    </Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        2. Kelayakan
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        Ini adalah kontes yang terbuka untuk semua pekerja rumah
                        tangga migran yang berada di Hong Kong dan hanya pekerja
                        rumah tangga migran di Hong Kong yang memenuhi syarat
                        dapat ikut serta. Setiap pemenang Kuis harus
                        memverifikasi bahwa mereka memenuhi syarat untuk ikut
                        serta, yaitu bahwa mereka adalah pekerja rumah tangga
                        migran di Hong Kong, jika diminta, untuk menerima hadiah
                        mereka. Setiap pemenang yang tidak dapat memenuhi
                        permintaan tersebut akan dikeluarkan dari daftar
                        pemenang dan tidak dapat menerima hadiah.
                    </Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        3. Periode Promosi
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        Kuis akan berlangsung selama 6,5 minggu (46 hari) dari
                        16 Juni 2022 hingga 31 Juli 2022.
                    </Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        4. Quiz Mechanics:
                    </Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        a. Entry
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        i. During the promotion period, entrants will register with a unique username and email on the quiz website (www.enrich15thbirthdaygift.com).
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        ii. Entrants will be required to consent and agree to two documents: Terms & Conditions, and Personal Information Collection Statement.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        iii. To log in, entrants will be sent a One-Time-Password (OTP) to their registered email address, which they will input in the blank provided. iv. Successful registration will qualify each entrant a chance to win as they move through the Quiz leaderboard.
                    </Typography>
                    <Typography marginTop="16px" fontWeight="bold" fontSize="1.2rem" lineHeight="1.3">
                        b. Quiz proper
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        i. In the quiz main page, entrants will see four (4) topics related to financial literacy. Entrants will only have access to the first topic, while the rest will progressively unlock at the start of each week for four weeks.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        ii. Each topic will contain a short video that they will need to watch.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        iii. After watching each video, they are going to be presented with five (5) questions related to the topic: three (3) true or false, and two (2) multiple choice. Entrants will answer these questions and earn ONE (1) point per correct answer, for a maximum of FIVE (5) points per topic.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        iv. At the end of five questions, they will be presented with their total score for that topic.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        v. Their highest scores are recorded, and they have the choice to restart and answer the questions again, move on to the next unlocked topic, go to the main menu, share their progress on Facebook, or try to earn extra points.
                    </Typography>
                    <Typography marginTop="16px" fontSize="1.2rem" lineHeight="1.3">
                        
                    </Typography> */}
                </Box>
            </Modal>
        </div>
    );
}
