# YouTube Service

Intermediary layer designed to stand as a middle service between the website front-end and the YouTube API services.

The YouTube service is intended to provide functional 1-to-1 representations of World Of Zero dotcom's frontend.
The actual displayed page should do extremely little processing on the provided data. This service should completely
mask the YouTube API for consuming services.