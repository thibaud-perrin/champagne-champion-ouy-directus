# 🍾 Champagne Champion Ouy - Directus CMS

Bienvenue dans le repository du CMS headless Directus pour le site [Champagne Champion Ouy](https://github.com/thibaud-perrin/champagne-champion-ouy).

## 📚 Description

Ce projet utilise [Directus](https://directus.io/) comme CMS headless pour gérer le contenu du site Champagne Champion Ouy. Directus permet une gestion flexible et intuitive des données, facilitant ainsi la création, la mise à jour et la suppression de contenu via une interface utilisateur conviviale.

## 🚀 Lancement du projet

Pour lancer le projet, suivez les étapes ci-dessous :

1. Clonez ce repository sur votre machine locale :
    ```bash
    git clone https://github.com/thibaud-perrin/champagne-champion-ouy-directus.git
    ```

2. Naviguez dans le répertoire du projet :
    ```bash
    cd champagne-champion-ouy-directus
    ```

3. Installez les dépendances nécessaires (si ce n'est pas déjà fait) :
    ```bash
    npm install
    ```

4. Lancez le CMS Directus :
    ```bash
    npx directus start
    ```

## 🔧 Configuration

Assurez-vous de configurer votre environnement en utilisant un fichier `.env` avec les variables nécessaires à Directus. Voici un exemple de configuration basique :

```env
# Example .env file
# IP or host the API listens on ["0.0.0.0"]
HOST="0.0.0.0"
# The port Directus will run on [8055]
PORT=8055
# The URL where your API can be reached on the web. It is also used for things like OAuth redirects,
# forgot-password emails, and logos that needs to be publicly available on the internet. ["/"]
PUBLIC_URL="/"

## Database
DB_CLIENT="pg"
DB_HOST="your-database-host"
DB_PORT="5432"
DB_DATABASE="postgres"
DB_USER="your-database-user"
DB_PASSWORD="your-database-password"
DB_SSL="false"

## Supabase Example (location name: Supabase)
STORAGE_LOCATIONS="supabase"
STORAGE_SUPABASE_DRIVER="s3"
STORAGE_SUPABASE_KEY="xxx"
STORAGE_SUPABASE_SECRET="xxx"
STORAGE_SUPABASE_ENDPOINT="https://xxx.supabase.co/storage/v1"
STORAGE_SUPABASE_BUCKET="xxx"
STORAGE_SUPABASE_REGION="eu-west-1"

### Security
SECRET="xx"
```

## 🛠️ Développement

Pour plus de détails sur l'utilisation de Directus, veuillez consulter la [documentation officielle de Directus](https://docs.directus.io/getting-started/introduction.html).

## 📄 Licence

Ce projet est privé et n'est pas destiné à être partagé ou distribué publiquement.

---

Si vous avez des questions ou des problèmes, n'hésitez pas à me contacter directement sur GitHub : [thibaud-perrin](https://github.com/thibaud-perrin).
