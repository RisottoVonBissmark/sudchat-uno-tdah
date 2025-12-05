# Utilisation d'une image Maven pour construire l'application
FROM maven:3.8.6-openjdk-25 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package

# Utilisation d'une image JRE pour executer l'application
FROM eclipse-temurin:25-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/bzh.sudchat-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]

