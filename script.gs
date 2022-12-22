function main() {
  /* let keywords = AdsApp.keywords()
         .orderBy("metrics.conversions DESC")
         .forDateRange("YESTERDAY")
         .withLimit(10)
         .get();

   console.log("The 10 keywords with the most conversions yesterday:");
   for (const keyword of keywords) {
       console.log(`${keyword.getText()}: ${keyword.getStatsFor("YESTERDAY")
                                                   .getImpressions()}`);
     }*/
    const spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1lWj6YPXyXpcV8GO0TrwPckW_dX0LLG3zqPmERefJ_HQ/edit#gid=0');
 
    const report = AdsApp.report(
      'SELECT campaign.name, metrics.clicks, metrics.impressions, metrics.conversions' +
      ' FROM   campaign ' +
      'WHERE campaign.status = "ENABLED" ' +
      'AND metrics.impressions > 1000' +
      ' AND segments.date during LAST_30_DAYS ' +
      ' ORDER BY metrics.conversions'
      );
    }