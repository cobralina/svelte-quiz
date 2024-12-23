<script>
export let duedate ="einsendeschluss";
export let pricetext = "preistext";
export let pricelink = "pricelink";
</script>

<div class="manual-box">
<div class="headline">Spieleanleitung</div>

<input type="checkbox" id="topic1">
<div class="ausklapper">
    <label for="topic1">
    <div class="topic">
     <!-- Upvote SVG -->
     <div class="button">
            <svg id="downvote1" class="icons-navigation-downvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 13L12 10L15 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <!-- Downvote SVG -->
            <svg id="upvote1" class="icons-navigation-upvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 11L12 14L9 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="ausklappertext"> Was ist das Ziel des Spiels? </div></div>
            <div class="copy" id="copy1">
                <p>Finden Sie das Lösungswort, welches sich aus den markierten Buchstaben ergibt.</p>
                <p>Auch mehrere Buchstaben aus einer Frage können zum Lösungswort gehören. </p></div>
         </label>
    </div>
    <input type="checkbox" id="topic2">
    <div class="ausklapper">
        <label for="topic2">
        <div class="topic">
         <!-- Upvote SVG -->
         <div class="button">
                <svg id="downvote2" class="icons-navigation-downvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13L12 10L15 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <!-- Downvote SVG -->
                <svg id="upvote2" class="icons-navigation-upvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 11L12 14L9 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="ausklappertext"> Was gibt es zu gewinnen? </div></div>
                <div class="copy" id="copy2">
                    <p>Gewinnen Sie bei fristgerechter Einsendung des korrekten Lösungswortes ein Buch.</p>
                    <p>Bitte schicken Sie Ihr Lösungswort am Ende des Spieles bis zum { duedate } ab.</p>
                    <p> Unter den richtigen Einsendungen verlosen wir <a href ={pricelink} target="_blank"> { pricetext }</a>.</p>
                    <p>Viel Glück!</p></div>
             </label>
        </div>

        <input type="checkbox" id="topic3">
    <div class="ausklapper">
        <label for="topic3">
        <div class="topic">
         <!-- Upvote SVG -->
         <div class="button">
                <svg id="downvote3" class="icons-navigation-downvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13L12 10L15 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <!-- Downvote SVG -->
                <svg id="upvote3" class="icons-navigation-upvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 11L12 14L9 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="ausklappertext"> Wie lauten die Teilnahmebedingungen? </div></div>
                <div class="copy" id="copy3">
                    <p><span class="subline">§ 1 Teilnahmeberechtigung<br></span>
                        Teilnahme ab 18 Jahren. <br>
                    Die Teilnahme ist für Mitarbeiter des Veranstalters und deren Familienangehörige ausgeschlossen.
                </p> <p> 
                    <span class="subline">§ 2 Teilnahme </span><br>
                    Die Teilnahme erfolgt durch Einsendung der korrekten Antwort auf das jeweilige Literaturrätsel. Mehrfachmeldungen derselben Person werden nicht berücksichtigt und erhöhen nicht die Gewinnchancen. Der Veranstalter behält sich vor, bei Manipulationen im Zusammenhang mit Zugang zum oder Durchführung des Gewinnspiels, bei Verstößen gegen diese Teilnahmebedingungen, bei unlauterem Handeln oder bei falschen oder irreführenden Angaben im Zusammenhang mit der Teilnahme an dem Gewinnspiel, Personen von der Teilnahme auszuschließen. Die Teilnahme ist kostenlos und nicht an ein anderes Vertragsverhältnis mit dem Veranstalter gebunden.
                </p><p>
                    <span class="subline">§ 3 Teilnahmeschluss</span><br>
                Teilnahmeschluss ist der Ablauf des jeweils als Einsendeschluss angegebenen Tages.
                </p><p>
                    <span class="subline">§ 4 Gewinn</span><br>
                Gewinne sind der bzw. die im jeweiligen Literaturrätsel angegebenen Preise.
                </p>
                <span class="subline">§ 5 Gewinnermittlung</span><br>
                <p>Die Ermittlung der Gewinner erfolgt nach Teilnahmeschluss im Rahmen einer auf dem Zufallsprinzip beruhenden Verlosung unter allen Teilnehmern. Die Aushändigung des Gewinns erfolgt ausschließlich an den Gewinner. Ein Umtausch, eine Selbstabholung sowie eine Barauszahlung des Gewinns sind nicht möglich. Eventuell für den Versand der Gewinne anfallende Kosten übernimmt der Veranstalter. Mit der Inanspruchnahme des Gewinns verbundene Zusatzkosten gehen zu Lasten des Gewinners. Für eine etwaige Versteuerung des Gewinns ist der Gewinner selbst verantwortlich. Meldet sich der Gewinner nach zweifacher Aufforderung innerhalb einer Frist von 10 Tagen nicht, kann der Gewinn auf einen anderen Teilnehmer übertragen werden. Der Gewinner wird im Rahmen des nächsten Literaturrätsels öffentlich bekannt gemacht, sofern eine ausdrückliche Zustimmung erteilt wird.
                </p> <p>
                    <span class="subline">§ 6 Beendigung des Gewinnspiels</span><br>
               Der Veranstalter behält sich ausdrücklich vor, das Gewinnspiel ohne vorherige Ankündigung und ohne Mitteilung von Gründen zu beenden. Dies gilt insbesondere für jegliche Gründe, die einen planmäßigen Ablauf des Gewinnspiels stören oder verhindern würden.
                </p>
                <p><span class="subline">§ 7 Haftung</span><br>
                Jede Haftung des Veranstalters für das Bestehen der technischen Voraussetzungen der rechtzeitigen Teilnahme am Gewinnspiel oder der Versendung der Preise (ständiger Zugang der Internetseiten, auf denen die Teilnahme möglich ist, oder Versendung der Preise durch Transportunternehmen) ist ausgeschlossen.
                </p>
                <p>
                    <span class="subline">§ 8 Rechtsweg</span><br>
                Der Rechtsweg ist ausgeschlossen.</p>
                <p><span class="subline">§ 9 Veranstalter des Gewinnspiels </span><br>
                    Frankfurter Allgemeine Zeitung GmbH<br> Pariser Straße 1 <br>60486 Frankfurt am Main </p></div>
             </label>
        </div>
    
</div>