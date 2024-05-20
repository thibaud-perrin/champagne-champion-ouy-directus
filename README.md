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

DIRECTUS_SECRET=your-secret-key
DB_CLIENT=mysql
DB_HOST=your-database-host
DB_PORT=3306
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_DATABASE=your-database-name
```

## 🛠️ Développement

Pour plus de détails sur l'utilisation de Directus, veuillez consulter la [documentation officielle de Directus](https://docs.directus.io/getting-started/introduction.html).

## 📄 Licence

Ce projet est privé et n'est pas destiné à être partagé ou distribué publiquement.

---

Si vous avez des questions ou des problèmes, n'hésitez pas à me contacter directement sur GitHub : [thibaud-perrin](https://github.com/thibaud-perrin).
