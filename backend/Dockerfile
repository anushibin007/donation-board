# Build
FROM maven:3.9.7-eclipse-temurin-17-alpine AS builder
WORKDIR /tmp/staging-area

COPY . .
RUN mvn clean test package

# Package
FROM eclipse-temurin:17-jre-alpine AS runner

# We need curl package for healthcheck
RUN apk add curl

# Copy the artifact from the previous stage and use them
COPY --from=builder /tmp/staging-area/target/donation-board-backend-0.0.1-SNAPSHOT.jar donation-board-backend.jar

#HealthCheck
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=10 \
    CMD curl http://localhost:8080/actuator/health || exit 1

# Expose the end point
EXPOSE 8080

# Start the spring boot application with profile set to production
ENTRYPOINT exec java -jar -Dspring.profiles.active=prod donation-board-backend.jar
