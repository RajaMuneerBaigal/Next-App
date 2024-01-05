// client.js
import { useEffect } from 'react';
import redis from 'redis';
import { Client } from '@elastic/elasticsearch';
import mysql from 'mysql2';

const useClientEffect = () => {
  useEffect(() => {
    // Your client-specific code here
    const fetchData = async () => {
      // Redis Connection
      const redisClient = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });
      redisClient.set('example_key', 'example_value');

      // MySQL Connection
      const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      });

      connection.connect();
      connection.query('SELECT * FROM your_table', (error, results) => {
        console.log(results);
      });
      connection.end();

      // Elasticsearch Connection
      const esClient = new Client({ node: `http://${process.env.ELASTICSEARCH_HOST}:${process.env.ELASTICSEARCH_PORT}` });
      const { body: esResponse } = await esClient.search({
        index: 'your_index',
        body: {
          query: {
            match_all: {}
          }
        }
      });
      console.log(esResponse);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

};

export { useClientEffect };
