from django.contrib import admin

from analysis.models import AnalysisLevelCrossing, AnalysisFile

# Register your models here.
admin.site.register(AnalysisFile)
admin.site.register(AnalysisLevelCrossing)