# Cvičení - www.angular.cz #

Ukázková cvičení pro komunitní akce ze [školení AngularJS - angular.cz](http://www.angular.cz/#skoleni-pro-firmy)


## Co si nainstalovat
- [git](http://git-scm.com/downloads)
- doporučenou verzi [nodeJS](https://nodejs.org/en/) - 4.x

## NPM závislosti
Nodejs se nainstaloval spolu s balíčkovacím nástrojem npm.

## Ověření správnosti instalace

Stáhněte tento balíček kamkoli k sobě. 

```
git clone https://bitbucket.org/angular_cz/
```

Spusťte ve staženém adresáři příkaz pro instalaci závislostí. 

Pokud používáte windows, ujistěte se že jej spouštíte v shellu, kde máte k dispozici jak git tak node.
V případě že si nejste jistí, můžete použít například "Git Bash" nainstalovaný spou s gitem.


```
 npm install
```

Důležité je aby instalace chybou neskončila. Během spuštění se mohou objevovat warningy a modul node-gyp pravděpodobně vyhlásí několik chyb, i přesto by měla instalace doběhnout v pořádku. Ignorujte výzvu k instalaci pythonu a visual studia.

Poté spusťte cvičení pomocí: 

```
 npm start
```

Nyní, když otevřete prohlížeč na adrese [http://localhost:8000/](http://localhost:8000/) uvidíte seznam cvičení.


## Použití při cvičeních: ##

Všechny potřebné nástroje a závislosti jste nainstalovali už v předchozích krocích pomocí příkazu "npm install".

### Při dalším spouštění už si tak vystačíte s příkazem: ###
```
npm start
```
který spustí lokální server na adrese [http://localhost:8000/](http://localhost:8000/)

### Volba editoru ###

Otevřete si složku cvičení ve vašem oblíbeném editoru, tak, abyste viděli všechny příklady jako strom.

Velmi Vám doporučujeme použít editor, který umí syntaxi javascriptu a automatické formátování. Pokud to Váš editor neumí, můžete sáhnout po jednom z těchto:

 - Webstorm - [https://www.jetbrains.com/webstorm/download/] (https://www.jetbrains.com/webstorm/download/) - 30 dní trial
 - Netbeans - [https://netbeans.org/downloads/] (https://netbeans.org/downloads/) - zdarma
  
Prima, první půlku máme za sebou. 

#### Poznámka k editorům ####
Některé editory (například Webstorm) ukládají soubory tak, že se jej nejprve zapíšou do dočasného úložiště a poté překopírují na cílové místo. Toto způsobuje problémy při sledování změn souborů, pro účely kurzu tuto vlastnost vypněte (Webstorm ji označuje jako "safe write")


### Možné problémy ###

####unable to connect to github.com####
pokud vidíte tuto chybovou zprávu po spuštění *bower install*
 - máte buď blokováno připojení ke githubu  - to můžete ověřit otevřením github.com v prohlížeči
 - nebo máte blokován protokol git - spusťte příkaz, který "přesměruje" protokol git po https

```
git config url."https://github.com/".insteadOf git@github.com:
git config url."https://".insteadOf git://
```

Nyní už by měl příkaz *bower install* fungovat

Pokud problémy přetrvávají, a jste uživatelem systému Windows, může zde být následující problém.

 - Nastavení výše se zapíšou do .gitconfig do domovské složky, na Windows s profilem na vzdáleném disku však může každý ze shelů hledat home jinde.
 - Pokud je toto Váš případ, zkopírujte soubor do obou umístění, na sdílenou domovskou složku a c:\users\[name]\

Chcete-li používat konfiguraci i pro další projekty, můžete ji nastavit globálne (přidat atribut --global)

```
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://
```

#### bower install ####
Pokud Vám instalace selže s **chybou Failed at the courseware@xxxx postinstall script : bower install** - nepodařilo se spustit stažení závislostí.

1. nainstalujte bower globálně pomocí : **npm install -g bower**
2. smažte složku **node_modules**
3. spusťte znovu:  **npm install**