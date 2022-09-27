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
}) {
    //国际化
    const { t } = useTranslation();

    return (
        <div>
            <Modal open={props.isOpenTerms}>
                <Box sx={style}>
                    <Stack alignItems="end" paddingTop="10px" sx={{ transition: "translateX(10px)" }}>
                        <CloseIcon sx={{color: "rgb(126, 34, 92)",fontSize: "1.8rem",}} onClick={() => props.onTerms(false)}/>
                    </Stack>
                    <Typography
                        fontWeight="bold"
                        marginTop="15px"
                        variant="h5"
                        component="h3"
                    >
                        Syarat dan Ketentuan
                    </Typography>
                    <Typography
                        sx={{
                            mt: 2,
                            textDecoration: "underline",
                            lineHeight: "1.3rem",
                            fontSize: "1.2rem",
                        }}
                    >
                        TIDAK PERLU PEMBELIAN UNTUK MENGIKUTI ATAU MENANG.
                    </Typography>
                    <Typography
                        marginTop="16px"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
                        1. Deskripsi Promosi: “Hadiah Ulang Tahun Enrich ke-15:
                        Menangkan - Kuis Literasi Keuangan Online”
                    </Typography>
                    <Typography
                        marginTop="16px"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
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
                    <Typography
                        marginTop="16px"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
                        2. Kelayakan
                    </Typography>
                    <Typography
                        marginTop="16px"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
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
                    <Typography
                        marginTop="16px"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
                        3. Periode Promosi
                    </Typography>
                    <Typography
                        marginTop="16px"
                        fontSize="1.2rem"
                        lineHeight="1.3"
                    >
                        Kuis akan berlangsung selama 6,5 minggu (46 hari) dari
                        16 Juni 2022 hingga 31 Juli 2022.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
