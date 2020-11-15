FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build-env
WORKDIR /app

# Restore dependencies as a distinct layer
COPY generate-files-dotnet/*.csproj ./
RUN dotnet restore

COPY ./generate-files-dotnet/ ./
RUN dotnet publish -c Release -o out

# runtime
FROM mcr.microsoft.com/dotnet/core/runtime:3.1
WORKDIR /app
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
COPY --from=build-env /app/out .
ENTRYPOINT ["/entrypoint.sh"]