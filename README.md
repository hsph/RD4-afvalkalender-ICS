# RD4-afvalkalender-ICS
Deze JSON-applicatie genereert een .ics-bestand van de afvalkalender van RD4

https://www.rd4info.nl/NSI/Burger/Aspx/afvalkalender_public_text.aspx?pc=POSTCODE&nr=HUISNR


Benodigdheden
---------
- NPM / NodeJS
- Modules: ical-generator, moment, moment-timezone
- JSON-data afvalkalender

Stappen
---------
1. Vervang *POSTCODE* en *HUISNR* in de URL van de afvalkalender
2. Knip de ophaaldata uit de broncode (div = Afvalkalender1_pnlAfvalKalender)
3. Plak de HTML onder HTML-code op http://convertjson.com/html-table-to-json.htm
4. Druk op 'HTML to JSON' en sla het JSON-resultaat op als 'calendar-items.json' in de projectmap
5. Voer ical.js uit ('node ical.js')
6. Klaar! Importeer calendar-items.ics in jouw kalenderapplicatie
