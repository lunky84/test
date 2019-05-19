/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

 =====================================================
 SPONGE UK DEVELOPER TEST
 JSON parser and event handler
 =====================================================
*/

class ContentInstance{

	constructor(strDataLocation){
		this.strDataLocation = strDataLocation;
		this.objContent = {};
		this.arrOnReady = [];
		this.blReady = false;

		/**
		 * Get the JSON file
		 */
		$.getJSON( strDataLocation,
				( objResponse ) => {
					this.objContent = objResponse;
					this.blReady = true;
					/**
					 * Execute all the ready functions once loaded
					 */
					$.each( this.arrOnReady,
							function( intIndex, funDoOnReady ) {
								funDoOnReady.call();
							}
					);
				}
		);
	}

	/**
	 * Register a function to execute once loaded
	 */
	onReady( funDoOnReady ) {
		if( this.blReady ) {
			funDoOnReady.call();
		} else {
			this.arrOnReady.push( funDoOnReady );
		}
	};

	/**
	 * Get an item from the content data
	 */
	getItem( intItem ) {
		return this.objContent[intItem];
	};

	generateComponent(template, item, domElement) {
		if (template && item && domElement) {

			let strContentSource = $( '#'+template ).html();
			let resContentTemplate = Handlebars.compile( strContentSource );
			let strContentHTML = resContentTemplate( this.getItem( item ) );

			$( '#'+domElement ).append( strContentHTML );

		} else {
			alert ('Argument not provided');
		}

	}
	

}


/*
      ,'``.._   ,'``.
     :,--._:)\,:,._,.:       All Glory to
     :`--,''   :`...';\      the HYPNOTOAD!
      `,'       `---'  `.
      /                 :
     /                   \
   ,'                     :\.___,-.
  `...,---'``````-..._    |:       \
    (                 )   ;:    )   \  _,-.
     `.              (   //          `'    \
      :               `.//  )      )     , ;
    ,-|`.            _,'/       )    ) ,' ,'
   (  :`.`-..____..=:.-':     .     _,' ,'
    `,'\ ``--....-)='    `._,  \  ,') _ '``._
 _.-/ _ `.       (_)      /     )' ; / \ \`-.'
`--(   `-:`.     `' ___..'  _,-'   |/   `.)
    `-. `.`.``-----``--,  .'
      |/`.\`'        ,',');
          `         (/  (/
 */
