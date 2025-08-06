# Deployment Fixes and Troubleshooting

## Issues Fixed

### 1. Missing Vercel Adapter
**Problem**: Astro was configured with `output: "server"` but no Vercel adapter was installed, causing the "no-adapter-installed" error.

**Solution**: 
- Installed `@astrojs/vercel` package
- Added `adapter: vercel()` to `astro.config.mjs`
- Fixed CSS syntax error (`text-center` → `text-align: center`)

### 2. Google Forms API Issues in Production
**Problem**: API calls were failing in production due to CORS issues and environment variable problems.

**Solutions**:
- Updated API endpoints to use relative URLs instead of absolute URLs
- Added better error handling and validation for environment variables
- Created fallback form with direct Google Form link when API fails
- Added debug and test endpoints for troubleshooting

## Environment Variables Required

Make sure these environment variables are set in your Vercel deployment:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
GOOGLE_FORMS_ID=your-google-form-id
```

## Troubleshooting Endpoints

After deployment, you can use these endpoints to debug issues:

1. **Debug Environment Variables**: `/api/forms/debug`
   - Shows which environment variables are set
   - Does not expose sensitive data

2. **Test Google Forms API**: `/api/forms/test`
   - Tests the connection to Google Forms API
   - Shows form title, description, and question count

3. **Get Form Structure**: `/api/forms/get-structure?formId=your-form-id`
   - Fetches the complete form structure from Google Forms

## Fallback Behavior

If the Google Forms API fails:
1. The form will show an error message
2. Users will see a fallback link to the original Google Form
3. The form will still be functional via the direct Google Form link

## Deployment Steps

1. Ensure all environment variables are set in Vercel
2. Deploy using `vercel --prod` or through your Git integration
3. Test the debug endpoints to verify configuration
4. Test the form functionality

## Common Issues

### Environment Variables Not Set
- Check Vercel dashboard → Settings → Environment Variables
- Ensure variable names match exactly (case-sensitive)
- Make sure the private key includes `\n` characters for line breaks

### CORS Issues
- API endpoints now use relative URLs to avoid CORS
- If still having issues, check if the domain is correct in Google Cloud Console

### Google Forms API Permissions
- Ensure the service account has access to the Google Form
- Check that the form ID is correct
- Verify the service account has the necessary scopes

## Files Modified

- `astro.config.mjs` - Added Vercel adapter
- `package.json` - Added @astrojs/vercel dependency
- `src/components/DynamicForm.astro` - Fixed CSS, added fallback
- `src/pages/api/forms/get-structure.js` - Better error handling
- `src/pages/api/forms/submit.js` - Better error handling
- `src/pages/api/forms/debug.js` - New debug endpoint
- `src/pages/api/forms/test.js` - New test endpoint
- `vercel.json` - Deployment configuration 