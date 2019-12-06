﻿function initLocalization($translateProvider) {
	$translateProvider.translations('en', {
		// Role Choose
		text_who_are_you: 'Who Are You?',
		button_goto_login_fan: 'I\'m a fan',
		button_goto_login_worker: 'I\'m a player/Personal',
		button_register_later: 'I\'ll register later',

		// Login Worker
		input_login_worker_id: 'ID',
		input_login_worker_password: 'Password',

		// Registration
		title_registration: 'Registration',
		button_register_with_facebook: 'Register with Facebook',
		input_register_username: 'Select a Name',
		input_register_email: 'Your email',
		input_register_password: 'Select a password',
		input_register_password_confirm: 'Reenter a password again',
		input_register_teams_selected: 'Your teams',
		input_register_teams_selection: 'Which team you are a fan of?',
		text_confirm: 'Confirm',
		text_close: 'Close',
		text_terms_of_use: 'Terms of Use',
		button_confirm_registration: 'Sign Me In',

		// Login
		title_login: 'Login',
		button_login_with_facebook: 'Login with Facebook',
		text_or: 'Or',
		input_login_username: 'Username',
		input_login_password: 'Password',
		button_login_confirm: 'Let Me In',
		text_forgot_username_password: 'Forgot Username / Password',
		text_not_registered_question: 'Are You Not Registered?',
		button_goto_registration: 'Take Me to Registration',
		login_fail_password: 'Username or password incorrect',
		txt_yet_register_tennis: 'Not registered yet to',
		text_itennis: 'ITennis',
		txt_assitant_register_tennis: 'You must complete the registration in ITennis first and then you could enjoy all the best of loglig app',
		// txt_itennis_url_android: 'https://play.google.com/store/apps/details?id=com.igroup.tennis',
		txt_itennis_url_android: '/Activity/Form/',
		txt_itennis_url_ios: 'https://itunes.apple.com/gb/app/itennis-%D7%90%D7%99%D7%92%D7%95%D7%93-%D7%94%D7%98%D7%A0%D7%99%D7%A1-%D7%91%D7%99%D7%A9%D7%A8%D7%90%D7%9C/id1433919649?mt=8&ign-mpt=uo%3D2',

		// Forgot Password Dialog
		dialog_box_forgot_title: 'Password Recovery',
		dialog_box_forgot_subtitle: 'Enter your email',
		dialog_box_forgot_btn_cancel: 'Cancel',
		dialog_box_forgot_close: 'Close',
		dialog_box_forgot_btn_positive: 'Send',
		dialog_box_forgot_wrong_username: 'The email is incorrect',
		dialog_box_forgot_has_sent: 'The password has been sent to the email you registered with',

		// Forgot Password Page
		title_forgot_password: 'Name and Password Recovery',
		input_forgot_password_email: 'Email',
		button_forgot_password_confirm: 'Send me the details',

		// Main Navigation
		main_nav_title: 'Main Navigation',
		main_nav_competitions_list: 'Competitions',
		main_nav_rankings: 'Rankings',
		main_nav_leagues_list: 'All leagues',
		main_nav_my_profile: 'My profile',
		main_nav_edit_profile: 'Edit profile',
		main_nav_faq: 'FAQ',
		main_nav_rules: 'Game Regulations',
		main_nav_training: 'Training',
		main_nav_registration: 'Registration',
		main_nav_logout: 'Logout',
		main_nav_eilat_tournament: 'Tournaments',
		main_nav_activities_registration: 'Activities registrations',
		main_nav_all_clubs: 'All Clubs',
		main_nav_union: 'Tennis Association',
		main_nav_youth_competitions: 'Youth competitions calendar',

		// club
		club_players: 'Club Players',

		// Rankings
		text_ages: 'Ages',
		text_average_points: 'Average Points',
		text_points_average: 'Points To Average',

		// Competitio
		show_all: 'Show All',
		text_route: 'Route',
		text_category: 'Category',
		text_instruments: 'Instruments',
		text_composition: 'Composition',
		text_composition2: 'Composition2',
		text_club: 'Club',
		text_name: 'Name',
		text_rank: 'Rank',
		text_final_score: 'Score',
		text_player: 'Player',
		text_competition_rank: 'Competition rank',
		text_full_points: 'Points',

		// Fan
		fan_title: 'Fan',
		fan_ratio: 'Sets ratio',
		fan_success: 'Success present',
		fan_locate: 'Locate on table',
		fan_previous_game: 'Previous Game',
		fan_count: 'Total Fans',
		player_count: 'Total Players',
		fan_player_points: 'Points',
		fan_player_Rank: 'Rank',
		text_com_name: 'Name',
		text_dateofgame: 'Date',
		text_win_loss: 'W/L',
		text_opponent_player: 'Opp',
		text_partner_name: 'Par',
		text_result: 'Res',
		text_my_club: 'My club',

		team_fans_fans: 'Fans amount',
		team_fans_are_friends: 'Friends',

		// Leagues
		title_leagues_list: 'League List',
		leagues_most_fans: 'Most Fans',
		leagues_select: 'Select a league...',
		text_position: 'Position',
		end_registration_date: "End Registration date",
		start_date: "Start date",
		end_date: "End date",
		about_league: "about league",
		structure_league: "League structure",
		about_competition: "About competition",
		structure_competition: "Competition structure",
		text_register: "Register",
		text_game_bracket: "Game Bracket",

		Routes: 'Routes',
		maximumAge: "Max Age",
		minimumAge: "Min Age",
		Gender: "Gender",
		Region: "Region",
		Level: "Level",
		PlaceForQualification: "Place For Qualification",
		PlaceForFinal: "Place For Finals",
		QualificationStartDate: "Qualifications start date",
		QualificationEndDate: "Qualifications end date",
		FinalsStartDate: "Finals start date",
		FinalsEndDate: "Finals end date",

		// Edit Profile
		fan_edit_gallery: 'Gallery',
		fan_edit_camera: 'Camera',
		fan_edit_change_password: 'Change Password',
		fan_edit_old_password: 'Type old Password',
		fan_edit_new_password: 'Type new Password',
		fan_edit_repeat_new_password: 'Type new Password again',
		fan_edit_email: 'Your Email',
		fan_edit_alerts: 'Your Notifications',
		fan_edit_alerts_reminder: 'Reminder a day before a game',
		fan_edit_alerts_change_game_date: 'Change in game date',
		fan_edit_alerts_messages: 'Getting Messages from non friends',
		fan_edit_alerts_game_result: 'Score at the end of game',
		fan_edit_save: 'Save changes',
		fan_response_from_update_details_success: "Data updated successfully",

		// Union
		contact_details: "Contact Details",
		fans_sum: "Fans count",

		// Teams
		teams_list: 'Teams List',
		teams_players: 'Team Players',
		teams_fans: 'Team Fans',
		title_activities_list: 'Activities List',
		text_about_team: 'About Team',
		text_to_standings: 'To standings',

		// History
		history_incounters: 'Incounters',
		history_games: 'Games History',

		// Player:
		player_role: 'Role :',
		player_height: 'Height :',
		player_height_unit: 'm',
		player_age: 'Age :',
		player_age_unit: '',
		player_handicap_level: 'handicap level:',

		//Referee set games results
		update_game_score: 'Update game results',
		quarter: 'Set',
		isGoldenQuarter: 'Is golden set ?',
		technicalVictoryFor: 'Technical Victory for',
		endGameMessage: 'Are you sure you want to end the game and publish results ?',
		cancel: 'Cancel',
		save: 'Save',
		edit: 'Edit',
		addQuarter: 'Add Set',
		setScoreAndPublish: 'End & Publish game',
		technicalVictory: 'Technical Victory',
		technicalVictoryConfirmAlert: 'A Technical Victory will be assigned to ',

		// Games
		games_title: 'Games',
		games_next: 'Next Game',
		games_last: 'Last Game',
		games_first: 'First Game',
		games_ended: 'Ended games',
		games_upcoming: 'Upcoming games',
		games_no_games: 'No Games',
		competition_title: 'Competitions',

		// Group
		group_title: 'Group :',

		// Validation
		input_register_worker_email: "Email",
		validation_title_login: "Error",
		validation_title_signup: "Error",
		validation_title_forgot_password: 'Error',
		validation_missing_id: "Must provide a valid ID",
		validation_invalid_id: "You must enter a valid ID",
		validation_teams_checked: 'You must select at least one group',
		validation_missing_username: "Must provide a username",
		validation_missing_password: "Must provide a password",
		validation_length_password: "Password length must be 6 characters at least",
		validation_passwords_dont_match: "Passwords don\'t match",
		validation_invalid_email: "Must provide a valid email",
		validation_terms_of_service: "Must accept terms of use",
		validation_teams_limit: "You have reached the maximum number of selections",
		text_password_hint: "The password for initial entry is",
		email_sent: "email sent",
		incorrect_email_userid: 'Email or User Id incorrect',

		no_active_yet: 'No active yet',
		no_friends_yet: 'No Friends yet',
		no_fans_yet: 'No fans yet',
		team_fans: 'Team Fans',

		button_ok: 'OK',
		text_teams: 'Teams',
		hello_world: "Hello World",
		dialog_button_ok: "OK",
		title_preregistration: '',
		text_remove: 'Remove',
		text_from_friends: 'from friends?',
		text_friends: 'Friends',
		text_table: 'Table',
		text_first_place: 'First Place',
		text_second_place: 'Second Place',
		text_third_place: 'Third Place',
		text_cycle: 'Cycle',
		text_no_data: 'No data',
		text_team: 'Team',
		text_games: 'G',
		text_points: 'P',
		text_draw: 'D',
		text_setPlus: 'S+',
		text_setMinus: 'S-',
		text_gamingPlus: 'G+',
		text_gamingMinus: 'G-',
		text_penalty: 'PEN',
		text_wins: 'W',
		text_ties: 'Tie',
		text_loses: 'L',
		text_techloses: 'TL',
		text_sets: 'Set',
		text_goals: 'Basket',
		text_ratio: 'Rat',
		text_message: 'Message',
		text_show_white: 'Snow White',
		text_prof_staff: 'Professional staff',
		text_search: 'Search',
		text_ok: 'OK',
		text_going: 'I\'m Coming!',
		text_is_comming: 'Coming ?',
		text_live_now: 'Now LIVE',
		text_upcomming: 'Upcoming game',
		text_places: 'Places :',
		text_coming_to_game: 'Coming to the game',
		text_fans: 'Fans',
		text_players: 'Players',
		text_sportsmans: 'Sportsmans',
		text_friend: 'Friend',
		text_mutual_friend: 'Mutual Friend',
		text_error: "Error",
		msg_friendship_request_sent: 'A Friend request will be sent to ',
		msg_chat_request_sent1: 'This user is not a friend.',
		msg_chat_request_sent2: 'You must be a friend to chat.',
		text_friend_request: 'Friend Request',
		button_approve: 'Approve',
		button_reject: 'Reject',
		text_select_all: 'Select All',
		text_disciplines: 'Discipline',

		// PDF
		pdf_beach_games: 'Beach Games',
		pdf_grass_games: 'Grass Games',
		pdf_transport: 'Transport Schedule',
		pdf_regulations: 'Regulations',

		// Notifications
		notifications: 'Notifications',
		notifications_remove_all: 'Delete All',
		notifications_report: 'Report',
		text_players: 'Players',
		text_unionofficials: 'Union managers',
		text_leagueofficials: 'League managers',
		text_clubofficials: 'Club managers',
		text_select_recipients: 'Choose Recipients',
		text_team_managers: 'Team managers',
		text_select_all_friends: 'Select all friends',
		text_list_of_recipients: 'List of recipients',
		txt_textarea_placeholder: 'Type a message here',
		text_select_teams: 'Select teams',
		text_new_alert: 'New Alert',
		text_view: 'View',

		// Training
		training_table_title: 'Training',
		training_table_date: 'Date',
		training_table_time: 'Time',
		training_table_gymnasium: 'Gymnasium',
		training_table_coming: 'Coming ?',

		// Icon bars
		iconbar_roster: 'Roster',
		iconbar_schedule: 'Schedule',
		iconbar_fans: 'Fans',
		iconbar_standings: 'Standings',
		iconbar_about: 'About',
		iconbar_teams: 'Teams',
		iconbar_players: 'Players',

		mail_sent_successful: 'Report has been set',
		photo_upload_successful: 'Photo uploaded successfully',

		sharemsg_successful: 'Shared message successfully',
		sendmsg_successful: 'Sent message successfully',
		validation_sendmsg_checked: 'You must select at least one user',

		upload_gallery_title: 'Upload image to gallery',
		upload_gallery_message: 'Are you sure?',

		event: 'Event',
		//new vesion tennis 2.3.1
		Youth_competitions: 'Youth competitions',
		Daily_competitions: 'Daily competitions',
		Senior_competitions: 'Senior competitions',
		area_South: 'South',
		area_North: 'North',
		area_Center: 'Center',
		area_Jerusalem: 'Jerusalem',
		area_Sharon: 'Sharon',
		main_nav_events_list: 'Events',
		main_nav_event_list: 'Event',
		Medical_certificate:'Medical certificate',
		main_nav_category_list:'Category List',
		area_club_tilte:'clubs',
		FILE_SELECTED:'"File have selected successfully. please save for completing uploading"'
	});

	$translateProvider.translations('iw', {
		// Role Choose
		text_who_are_you: "מי את/ה?",
		button_goto_login_fan: "אני אוהד/ת",
		button_goto_login_worker: "אני שחקנ/ית או בעל/ת תפקיד",
		button_register_later: "ארשם מאוחר יותר",

		// Login Worker
		input_login_worker_id: "תעודת זהות",
		input_login_worker_password: "סיסמה",

		// Registration
		title_registration: "רישום",
		button_register_with_facebook: "רוצה להירשם עם פייסבוק",
		input_register_username: "בחר/י שם משתמש",
		input_register_email: "הדוא\"ל שלך",
		input_register_password: "בחר/י סיסמה",
		input_register_password_confirm: "הקלד/י שוב את הסיסמה",
		input_register_teams_selected: "הקבוצות שלך",
		input_register_teams_selection: "איזה קבוצה את/ה אוהד/ת?",
		text_confirm: "אשר/י",
		text_close: 'סגור',
		text_terms_of_use: "תנאי שימוש",
		button_confirm_registration: "תכניסו אותי",

		// Login
		title_login: "התחברות",
		button_login_with_facebook: "התחברות באמצעות פייסבוק",
		text_or: "או",
		input_login_username: "שם משתמש",
		input_login_password: "סיסמה",
		button_login_confirm: "תכניסו אותי",
		text_forgot_username_password: "שכחתי את שם המשתמש או הסיסמה",
		text_not_registered_question: "אינך רשומ/ה למערכת?",
		button_goto_registration: "קחו אותי להרשמה",
		login_fail_password: 'שם המשתמש או הסיסמא שגויים',
		txt_yet_register_tennis: 'לא נרשמת עדיין ל',
		text_itennis: 'איטניס',
		txt_assitant_register_tennis: 'יש להשלים את הרישום לאיטניס תחילה ואז תוכל/י להנות מכל מה שיש לאפליקציית לוגליג להציע',

		// Forgot Password Dialog
		dialog_box_forgot_title: 'שחזור סיסמה',
		dialog_box_forgot_subtitle: 'הכנס את כתובת המייל שלך',
		dialog_box_forgot_btn_cancel: 'ביטול',
		dialog_box_forgot_close: 'סגירה',
		dialog_box_forgot_btn_positive: 'שליחה',
		dialog_box_forgot_wrong_username: 'שם המשתמש שגוי ',
		dialog_box_forgot_has_sent: 'הסיסמה נשלחה אל המייל שאיתו נרשמת',

		// Forgot Password Page
		title_forgot_password: "שחזור שם וסיסמה",
		input_forgot_password_email: "דוא\"ל",
		button_forgot_password_confirm: "שלחו אלי את הפרטים",

		// Main Navigation
		main_nav_title: 'ניווט ראשי',
		main_nav_competitions_list: 'תחרויות',
		main_nav_rankings: 'דירוגים',
		main_nav_leagues_list: 'כל הליגות',
		main_nav_my_profile: 'הפרופיל שלי',
		main_nav_edit_profile: 'עריכת פרופיל',
		main_nav_faq: 'שאלות ותשובות',
		main_nav_rules: 'תקנון ההתאחדות',
		main_nav_training: 'אימונים',
		main_nav_registration: 'הרשמה לאפליקציה',
		main_nav_logout: 'יציאה',
		main_nav_eilat_tournament: 'טורנירים',
		main_nav_activities_registration: "רישום לפעילויות",
		main_nav_all_clubs: 'כל המועדונים',

		main_nav_union: 'איגוד הטניס בישראל',
		main_nav_youth_competitions: 'לוח תחרויות + נהלי נוער',

		//club
		club_players: 'שחקני המועדון',

		// Rankings
		text_ages: 'גילאים',
		text_average_points: 'ממוצע',
		text_points_average: 'ניקוד לממוצע',

		// Competition
		show_all: 'הצג הכול',
		text_route: 'מַסלוּל',
		text_category: 'קטגוריה',
		text_instruments: 'מכשירים',
		text_composition: 'הרכב',
		text_composition2: 'הרכב2',
		text_club: 'אגודה',
		text_name: 'שם',
		text_rank: 'דירוג',
		text_final_score: 'ציון',
		text_player: 'שחקן',
		text_competition_rank: 'דירוג התחרות',
		text_full_points: 'נק',


		// Fan
		fan_title: 'אוהד',
		fan_ratio: 'יחס מערכות',
		fan_success: 'אחוזי הצלחה',
		fan_locate: 'מיקום בטבלה',
		fan_previous_game: 'משחק קודם',
		fan_count: 'מספר אוהדים',
		player_count: 'מספר שחקנים',
		fan_player_points: 'נק',
		fan_player_Rank: 'דירוג',
		text_com_name: 'שם',
		text_dateofgame: 'תאריך',
		text_win_loss: 'נ/ה',
		text_opponent_player: 'יריב',
		text_partner_name: 'שותף',
		text_result: 'תוצאה',
		text_my_club: 'המועדון שלי',

		team_fans_fans: 'כמות אוהדים',
		team_fans_are_friends: 'מתוכם חברים',

		// Leagues
		title_leagues_list: "רשימת הליגות",
		leagues_most_fans: 'הכי הרבה אוהדים',
		leagues_select: 'בחר לידה',
		text_position: 'מיקום',
		end_registration_date: "תאריך סיום רישום",
		start_date: "תאריך התחלה",
		end_date: "תאריך סיום",
		about_league: "על הליגה",
		structure_league: "מבנה הליגה",
		about_competition: "על התחרות",
		structure_competition: "מבנה התחרות",
		Routes: 'מסלולים',
		maximumAge: "גיל מקסימום",
		minimumAge: "גיל מינימום",
		Gender: "מין",
		Region: "אזור",
		Level: "רמה",
		PlaceForQualification: "כתובת למוקדמות",
		PlaceForFinal: "כתובת לבית גמר",
		QualificationStartDate: 'מוקדמות תאריך התחלה',
		QualificationEndDate: 'מוקדמות תאריך סיום',
		FinalsStartDate: 'גמר תאריך התחלה',
		FinalsEndDate: 'גמר תאריך סיום',
		text_register: "הירשם",
		text_game_bracket: "עץ משחקים",

		// Edit Profile
		fan_edit_gallery: 'גלריה',
		fan_edit_camera: 'מַצלֵמָה',
		fan_edit_change_password: 'החלפת סיסמה ',
		fan_edit_old_password: 'הקלד/י סיסמה ישנה',
		fan_edit_new_password: 'הקלד/י סיסמה חדשה',
		fan_edit_repeat_new_password: 'הקלד/י סיסמה חדשה שוב',
		fan_edit_email: 'הדוא"ל שלך',
		fan_edit_alerts: 'ההתראות שלך',
		fan_edit_alerts_reminder: 'תזכורת יום לפני משחק',
		fan_edit_alerts_change_game_date: 'שינוי מועד משחק',
		fan_edit_alerts_messages: 'קבלת הודעות לא מחברים',
		fan_edit_alerts_game_result: 'תוצאות משחק עם סיומו',
		fan_edit_save: 'שמור',
		fan_response_from_update_details_success: "הנתונים עודכנו בהצלחה",

		// Union
		contact_details: "פרטי קשר",
		fans_sum: "סה״כ אוהדים",

		// Teams
		teams_list: 'רשימת ליגות',
		teams_players: 'סגל שחקנים',
		teams_fans: 'אוהדי הקבוצה',
		title_activities_list: 'רישום לפעילויות',
		text_about_team: 'על הקבוצה',
		text_to_standings: 'לטבלת הליגה',

		// History
		history_incounters: 'מפגשים',
		history_games: 'היסטוריית משחקים',

		// Player:

		player_role: 'תפקיד:',
		player_height: 'גובה:',
		player_height_unit: 'מ',
		player_age: 'גיל :',
		player_age_unit: '',
		player_handicap_level: 'ניקוד נכות:',

		//Referee set games results
		update_game_score: 'עדכון תוצאות משחק',
		quarter: 'רבע',
		isGoldenQuarter: 'הארכה ?',
		technicalVictoryFor: 'נצחון טכני עבור ',
		cancel: 'ביטול',
		save: 'שמירה',
		edit: 'עריכה',
		addQuarter: 'הוספת רבע',
		setScoreAndPublish: 'סיום משחק ופרסום תוצאות',
		technicalVictory: 'נצחון טכני',
		technicalVictoryConfirmAlert: 'נצחון טכני יירשם עבור: ',
		endGameMessage: 'האם לסיים משחק ולפרסם תוצאות ?',

		// Games
		games_title: 'משחקים',
		games_next: 'משחק הבא',
		games_last: 'משחק אחרון',
		games_first: 'משחק קודם',
		games_ended: 'משחקים שהסתיימו',
		games_upcoming: 'המשחקים הבאים',
		games_no_games: 'אין משחקים',
		competition_title: 'Competitions',

		// Group
		group_title: 'קבוצה:',

		// !!!
		hello_world: "שלום עולם",
		dialog_button_ok: "אישור",
		title_preregistration: "שווה להירשם...",
		text_remove: 'להסיר את',
		text_from_friends: 'מרשימת החברים?',
		text_friends: 'חברים',
		text_table: 'הטבלה',
		text_first_place: 'מקום ראשון',
		text_second_place: 'מקום שני',
		text_third_place: 'מקום שלישי',
		text_cycle: 'מחזור',
		text_no_data: 'אין נתונים',
		text_team: 'קבוצה',
		text_games: 'מ',
		text_points: 'נק',
		text_draw: 'ת',
		text_setPlus: 'מ+',
		text_setMinus: 'מ-',
		text_gamingPlus: 'מש+',
		text_gamingMinus: 'מש-',
		text_penalty: 'פ',
		text_wins: 'נ',
		text_ties: 'תק',
		text_loses: 'ה',
		text_techloses: 'ט',
		text_sets: 'מע',
		text_goals: 'סלים',
		text_ratio: 'יחס',
		text_message: 'הודעת מערכת',
		text_show_white: 'שגיאה',
		text_prof_staff: 'סגל מקצועי',

		no_active_yet: 'עדיין לא פעיל',
		no_friends_yet: 'טרם צירפת חברים',
		no_fans_yet: 'לא נרשמו אוהדים לקבוצה',
		team_fans: 'אוהדי הקבוצה',
		text_friend: 'חברים',
		text_mutual_friend: 'חברים משותפים',
		text_error: "שגיאה",
		text_teams: "קבוצות",
		response_invalid_username_or_password: "שם משתמש או סיסמה אינם נכונים",
		response_user_already_exists: "השם משתמש שבחרת קיים במערכת",
		input_register_worker_fullname: "שם מלא",
		input_register_worker_id: "ת.ז.",
		input_register_worker_email: "דואל",
		validation_title_login: "שגיאה",
		validation_title_signup: "שגיאה",
		validation_title_forgot_password: "שגיאה",
		validation_missing_fullname: "צריך להזין שם מלא",
		validation_missing_id: "צריך להזין ת.ז ",
		validation_invalid_id: "צריך להזין מס' ת.ז. תקין",
		validation_missing_username: "צריך להזין שם משתמש",
		validation_missing_password: "צריך להזין סיסמה",
		validation_length_password: "סיסמה צריכה להכיל 6 תווים לפחות",
		validation_passwords_dont_match: "הסיסמאות לא תואמות",
		validation_invalid_email: "כתובת המייל שלך לא מזוהה במערכת",
		validation_terms_of_service: "חובה לקבל את תנאי השימוש",
		validation_teams_checked: "חובה לבחור קבוצה אחת לפחות",
		validation_teams_limit: "יש לבחור 3 קבוצות לכל היותר",
		text_password_hint: "סיסמא לכניסה ראשונית הינה",
		email_sent: "הסיסמה נשלחה אל המייל",
		incorrect_email_userid: 'ת.ז או אימייל שגויים',

		button_ok: "אישור",
		button_goto_register_fan: "אני אוהד/ת",
		button_goto_register_worker: "אני שחקנ/ית או בעל/ת תפקיד",
		text_search: "חיפוש",
		text_ok: 'אישור',
		text_going: 'גם אני מגיע',
		text_is_comming: 'מגיע?',
		text_live_now: 'LIVE עכשיו',
		text_upcomming: 'המשחק הקרוב',
		text_places: ':מקומות',
		text_fans: "אוהדים",
		text_sportsmans: 'שחקנים',
		text_coming_to_game: 'מגיע',
		msg_friendship_request_sent: 'בקשת חברות תשלח ל',
		msg_chat_request_sent1: 'משתמש זה אינו חבר',
		msg_chat_request_sent2: 'עלייכם להיות חברים על מנת לשלוח הודעות',
		text_friend_request: 'בקשת חברות',
		button_approve: 'אשר/י',
		button_reject: 'דחה/י',
		text_select_all: 'בחר את כולם',
		text_disciplines: "ענף",

		// PDF
		pdf_beach_games: 'שיבוץ למשחקי חופים',
		pdf_grass_games: 'שיבוץ למשחקי דשא',
		pdf_transport: 'לוח היסעים',
		pdf_regulations: 'תקנון',

		// Notifications
		notifications: 'התראות',
		notifications_remove_all: 'מחק הכל',
		notifications_report: 'דווח/י',
		text_players: 'שחקנים',
		text_team_managers: 'מנהלי קבוצות',
		text_unionofficials: 'מנהלי איגוד',
		text_leagueofficials: 'מנהלי ליגות',
		text_clubofficials: 'מנהלי אגודות',
		text_select_recipients: 'בחירת נמענים',
		text_select_all_friends: 'לכל החברים',
		text_list_of_recipients: 'בחר נמענים',
		txt_textarea_placeholder: 'תוכן ההודעה',
		text_select_teams: 'בחר קבוצות',
		text_new_alert: 'התראה חדשה',
		text_view: 'הצג',

		// Training
		training_table_title: 'אימון',
		training_table_date: 'תאריך',
		training_table_time: 'שעה',
		training_table_gymnasium: 'אולם',
		training_table_coming: 'נוכחות',

		// Icon bars
		iconbar_roster: 'סגל',
		iconbar_schedule: 'ל.משחקים',
		iconbar_fans: 'אוהדים',
		iconbar_standings: 'טבלה',
		iconbar_about: 'על',
		iconbar_teams: 'קבוצות',
		iconbar_players: 'שחקנים',

		mail_sent_successful: 'הדיווח נשלח',
		photo_upload_successful: 'התמונה הועלתה בהצלחה',

		sharemsg_successful: 'ההודעה המשותפת בוצעה בהצלחה',
		sendmsg_successful: 'ההודעה נשלחה בהצלחה',
		validation_sendmsg_checked: 'עליך לבחור לפחות משתמש אחד',

		upload_gallery_title: 'העלה תמונה לגלריה',
		upload_gallery_message: 'האם אתה בטוח?',

		event: 'ארוע',
		//new vesion tennis 2.3.1
		Youth_competitions: 'תחרויות נוער ולאומיות',
		Daily_competitions: 'תחרויות יומיות',
		Senior_competitions: 'תחרויות סניור',
		area_South : 'דרום',
		area_North : 'צפון',
		area_Center : 'מרכז',
		area_Jerusalem : 'ירושלים',
		area_Sharon : 'שרון',
		main_nav_events_list: 'אירועים',
		main_nav_event_list: 'אירוע',
		Medical_certificate:'אישור רפואי',
		main_nav_category_list:'קטגוריות',
		area_club_tilte:'מועדונים',
		FILE_SELECTED:'הקובץ נבחר בהצלחה'
	});

	if (localStorage.getItem('userLang')) {
		console.log('LAnguage found ', localStorage.getItem('userLang'));
		$translateProvider.preferredLanguage(localStorage.getItem('userLang'));
	} else {
		localStorage.setItem('userLang', LANGUAGE);
		console.log('LAnguage not found setted', localStorage.getItem('userLang'));
		$translateProvider.preferredLanguage(LANGUAGE);
	}

	$translateProvider.fallbackLanguage(LANGUAGE);
}
