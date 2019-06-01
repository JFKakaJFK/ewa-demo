# Zeit Now Demo

Eine Demo zu Serverless Deployment mit [Zeit Now](https://zeit.co/now). Dabei kommuniziert das Frontend (Single Page Next.js Webanwendung) mit mehreren verschiedenen APIs, geschrieben in Bash, PHP, Node.js, Python und dem Python Framework Flask.

Dabei schickt das Frontend periodisch Anfragen zu den APIs, welche mit zufällig generierten x-und y-Koordinaten antworten. Im Frontend wird das jeweilige Logo dann zur betreffenden Position animiert.

Um die Anwendung lokal auszuprobieren muss zuert Zeit now  [installiert](https://zeit.co/docs/v2/getting-started/installation/) werden, dann kann die Demo in der Konsole gestartet werden. Um die Demo lokal auszuführen kann `now dev` verwendet werden, um die Anwendung zu veröffentlichen muss `now` verwendet werden. 

Wenn die Github/Gitlab Erweiterung aktiviert ist, kann mit jedem push auf einen designierten Release-Branch die Anwendung neu veröffentlicht werden, mit Preview auf die nächste Version.
