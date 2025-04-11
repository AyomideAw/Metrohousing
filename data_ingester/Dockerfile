# Use the latest stable Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /usr/app/

RUN apt-get update && \
    apt-get -y install cron && \
    rm -rf /var/lib/apt/lists/*  # Clean up to reduce image size

# Copy the requirements file into the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python code into the container
COPY DataIngester.py .
COPY IngesterCalls.py .
COPY database.py .
COPY updateIngester.py .

RUN mkdir -p /usr/app/data_ingester/output

# Set up cron job
COPY ingester-cron /etc/cron.d/ingester-cron
RUN chmod 0644 /etc/cron.d/ingester-cron && \
    crontab /etc/cron.d/ingester-cron

# Start cron and keep container running
CMD ["sh", "-c", "python DataIngester.py && python updateIngester.py && cron && tail -f /dev/null"]