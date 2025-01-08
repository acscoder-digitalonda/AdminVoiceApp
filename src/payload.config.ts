// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import AppSubmissions from './collections/AppSubmissions'; 

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { s3Storage } from '@payloadcms/storage-s3'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media,AppSubmissions],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true, // Enable S3 storage for the 'media' collection
      },
      bucket: process.env.S3_BUCKET, // S3 bucket name
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID, // AWS Access Key ID
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY, // AWS Secret Access Key
        },
        region: process.env.S3_REGION, // AWS Region (e.g., 'us-east-1')
        // Optional: Add an endpoint for S3-compatible services (e.g., DigitalOcean Spaces, MinIO)
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})

 