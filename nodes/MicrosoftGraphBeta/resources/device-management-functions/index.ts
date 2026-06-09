import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Apple Push Notification Certificate Download Apple Push Notification Certificate Signing Request",
					"value": "Device Management Apple Push Notification Certificate Download Apple Push Notification Certificate Signing Request",
					"action": "Invoke function downloadApplePushNotificationCertificateSigningRequest",
					"description": "Download Apple push notification certificate signing request",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/applePushNotificationCertificate/microsoft.graph.downloadApplePushNotificationCertificateSigningRequest()"
						}
					}
				},
				{
					"name": "Device Management Assignment Filters Get Platform Supported Properties",
					"value": "Device Management Assignment Filters Get Platform Supported Properties",
					"action": "Invoke function getPlatformSupportedProperties",
					"description": "Invoke function getPlatformSupportedProperties",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/assignmentFilters/microsoft.graph.getPlatformSupportedProperties(platform='{{$parameter[\"platform\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Assignment Filters Get State",
					"value": "Device Management Assignment Filters Get State",
					"action": "Invoke function getState",
					"description": "Invoke function getState",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/assignmentFilters/microsoft.graph.getState()"
						}
					}
				},
				{
					"name": "Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties",
					"value": "Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties",
					"action": "Invoke function getSupportedProperties",
					"description": "Invoke function getSupportedProperties",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/assignmentFilters/{{$parameter[\"deviceAndAppManagementAssignmentFilter-id\"]}}/microsoft.graph.getSupportedProperties()"
						}
					}
				},
				{
					"name": "Device Management Audit Events Get Audit Activity Types",
					"value": "Device Management Audit Events Get Audit Activity Types",
					"action": "Invoke function getAuditActivityTypes",
					"description": "Invoke function getAuditActivityTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/auditEvents/microsoft.graph.getAuditActivityTypes(category='{{$parameter[\"category\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Audit Events Get Audit Categories",
					"value": "Device Management Audit Events Get Audit Categories",
					"action": "Invoke function getAuditCategories",
					"description": "Invoke function getAuditCategories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/auditEvents/microsoft.graph.getAuditCategories()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices App Diagnostics",
					"value": "Device Management Comanaged Devices App Diagnostics",
					"action": "Invoke function appDiagnostics",
					"description": "Invoke function appDiagnostics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.appDiagnostics(upn='{{$parameter[\"upn\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results",
					"value": "Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results",
					"action": "Invoke function getCloudPcRemoteActionResults",
					"description": "Invoke function getCloudPcRemoteActionResults",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcRemoteActionResults()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Get Cloud Pc Review Status",
					"value": "Device Management Comanaged Devices Managed Device Get Cloud Pc Review Status",
					"action": "Invoke function getCloudPcReviewStatus",
					"description": "Invoke function getCloudPcReviewStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcReviewStatus()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Get File Vault Key",
					"value": "Device Management Comanaged Devices Managed Device Get File Vault Key",
					"action": "Invoke function getFileVaultKey",
					"description": "Invoke function getFileVaultKey",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getFileVaultKey()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Get Non Compliant Settings",
					"value": "Device Management Comanaged Devices Managed Device Get Non Compliant Settings",
					"action": "Invoke function getNonCompliantSettings",
					"description": "Invoke function getNonCompliantSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getNonCompliantSettings()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Get Oem Warranty",
					"value": "Device Management Comanaged Devices Managed Device Get Oem Warranty",
					"action": "Invoke function getOemWarranty",
					"description": "Invoke function getOemWarranty",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getOemWarranty()"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Retrieve Remote Help Session",
					"value": "Device Management Comanaged Devices Managed Device Retrieve Remote Help Session",
					"action": "Invoke function retrieveRemoteHelpSession",
					"description": "Invoke function retrieveRemoteHelpSession",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{{$parameter[\"sessionKey\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Config Manager Collections Get Policy Summary",
					"value": "Device Management Config Manager Collections Get Policy Summary",
					"action": "Invoke function getPolicySummary",
					"description": "Invoke function getPolicySummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configManagerCollections/microsoft.graph.getPolicySummary(policyId='{{$parameter[\"policyId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Get Expiring Vpp Token Count",
					"value": "Device Management Dep Onboarding Settings Get Expiring Vpp Token Count",
					"action": "Invoke function getExpiringVppTokenCount",
					"description": "Invoke function getExpiringVppTokenCount",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/microsoft.graph.getExpiringVppTokenCount(expiringBeforeDateTime='{{$parameter[\"expiringBeforeDateTime\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Export Mobile Config",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Export Mobile Config",
					"action": "Invoke function exportMobileConfig",
					"description": "Exports the mobile configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}/microsoft.graph.exportMobileConfig()"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Get Encryption Public Key",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Get Encryption Public Key",
					"action": "Invoke function getEncryptionPublicKey",
					"description": "Get a public key to use to encrypt the Apple device enrollment program token",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.getEncryptionPublicKey()"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Devices Scheduled To Retire",
					"value": "Device Management Device Compliance Policies Get Devices Scheduled To Retire",
					"action": "Invoke function getDevicesScheduledToRetire",
					"description": "Invoke function getDevicesScheduledToRetire",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.getDevicesScheduledToRetire()"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Ios Available Update Versions",
					"value": "Device Management Device Configurations Get Ios Available Update Versions",
					"action": "Invoke function getIosAvailableUpdateVersions",
					"description": "Invoke function getIosAvailableUpdateVersions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/microsoft.graph.getIosAvailableUpdateVersions()"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Device Configuration Get Oma Setting Plain Text Value",
					"value": "Device Management Device Configurations Device Configuration Get Oma Setting Plain Text Value",
					"action": "Invoke function getOmaSettingPlainTextValue",
					"description": "Invoke function getOmaSettingPlainTextValue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/microsoft.graph.getOmaSettingPlainTextValue(secretReferenceValueId='{{$parameter[\"secretReferenceValueId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Are Global Scripts Available",
					"value": "Device Management Device Health Scripts Are Global Scripts Available",
					"action": "Invoke function areGlobalScriptsAvailable",
					"description": "Invoke function areGlobalScriptsAvailable",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceHealthScripts/microsoft.graph.areGlobalScriptsAvailable()"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Get Remediation Summary",
					"value": "Device Management Device Health Scripts Get Remediation Summary",
					"action": "Invoke function getRemediationSummary",
					"description": "Invoke function getRemediationSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceHealthScripts/microsoft.graph.getRemediationSummary()"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Device Health Script Get Remediation History",
					"value": "Device Management Device Health Scripts Device Health Script Get Remediation History",
					"action": "Invoke function getRemediationHistory",
					"description": "Function to get the number of remediations by a device health scripts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceHealthScripts/{{$parameter[\"deviceHealthScript-id\"]}}/microsoft.graph.getRemediationHistory()"
						}
					}
				},
				{
					"name": "Device Management Intents Device Management Intent Compare",
					"value": "Device Management Intents Device Management Intent Compare",
					"action": "Invoke function compare",
					"description": "Invoke function compare",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/microsoft.graph.compare(templateId='{{$parameter[\"templateId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Managed Devices App Diagnostics",
					"value": "Device Management Managed Devices App Diagnostics",
					"action": "Invoke function appDiagnostics",
					"description": "Invoke function appDiagnostics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.appDiagnostics(upn='{{$parameter[\"upn\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"value": "Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"action": "Invoke function getCloudPcRemoteActionResults",
					"description": "Invoke function getCloudPcRemoteActionResults",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcRemoteActionResults()"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Get Cloud Pc Review Status",
					"value": "Device Management Managed Devices Managed Device Get Cloud Pc Review Status",
					"action": "Invoke function getCloudPcReviewStatus",
					"description": "Invoke function getCloudPcReviewStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcReviewStatus()"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Get File Vault Key",
					"value": "Device Management Managed Devices Managed Device Get File Vault Key",
					"action": "Invoke function getFileVaultKey",
					"description": "Invoke function getFileVaultKey",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getFileVaultKey()"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Get Non Compliant Settings",
					"value": "Device Management Managed Devices Managed Device Get Non Compliant Settings",
					"action": "Invoke function getNonCompliantSettings",
					"description": "Invoke function getNonCompliantSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getNonCompliantSettings()"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Get Oem Warranty",
					"value": "Device Management Managed Devices Managed Device Get Oem Warranty",
					"action": "Invoke function getOemWarranty",
					"description": "Invoke function getOemWarranty",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getOemWarranty()"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Retrieve Remote Help Session",
					"value": "Device Management Managed Devices Managed Device Retrieve Remote Help Session",
					"action": "Invoke function retrieveRemoteHelpSession",
					"description": "Invoke function retrieveRemoteHelpSession",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{{$parameter[\"sessionKey\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Get Assigned Role Details",
					"value": "Device Management Get Assigned Role Details",
					"action": "Invoke function getAssignedRoleDetails",
					"description": "Retrieves the assigned role definitions and role assignments of the currently authenticated user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getAssignedRoleDetails()"
						}
					}
				},
				{
					"name": "Device Management Get Comanaged Devices Summary",
					"value": "Device Management Get Comanaged Devices Summary",
					"action": "Invoke function getComanagedDevicesSummary",
					"description": "Invoke function getComanagedDevicesSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getComanagedDevicesSummary()"
						}
					}
				},
				{
					"name": "Device Management Get Comanagement Eligible Devices Summary",
					"value": "Device Management Get Comanagement Eligible Devices Summary",
					"action": "Invoke function getComanagementEligibleDevicesSummary",
					"description": "Invoke function getComanagementEligibleDevicesSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getComanagementEligibleDevicesSummary()"
						}
					}
				},
				{
					"name": "Device Management Get Effective Permissions 1 F 5 F",
					"value": "Device Management Get Effective Permissions 1 F 5 F",
					"action": "Invoke function getEffectivePermissions",
					"description": "Invoke function getEffectivePermissions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getEffectivePermissions()"
						}
					}
				},
				{
					"name": "Device Management Get Effective Permissions 5 B 91",
					"value": "Device Management Get Effective Permissions 5 B 91",
					"action": "Invoke function getEffectivePermissions",
					"description": "Invoke function getEffectivePermissions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getEffectivePermissions(scope='{{$parameter[\"scope\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Get Role Scope Tags By Ids",
					"value": "Device Management Get Role Scope Tags By Ids",
					"action": "Invoke function getRoleScopeTagsByIds",
					"description": "Invoke function getRoleScopeTagsByIds",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getRoleScopeTagsByIds(ids={{$parameter[\"ids\"]}})"
						}
					}
				},
				{
					"name": "Device Management Get Role Scope Tags By Resource",
					"value": "Device Management Get Role Scope Tags By Resource",
					"action": "Invoke function getRoleScopeTagsByResource",
					"description": "Invoke function getRoleScopeTagsByResource",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getRoleScopeTagsByResource(resource='{{$parameter[\"resource\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Get Suggested Enrollment Limit",
					"value": "Device Management Get Suggested Enrollment Limit",
					"action": "Invoke function getSuggestedEnrollmentLimit",
					"description": "Invoke function getSuggestedEnrollmentLimit",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.getSuggestedEnrollmentLimit(enrollmentType='{{$parameter[\"enrollmentType\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Scoped For Resource",
					"value": "Device Management Scoped For Resource",
					"action": "Invoke function scopedForResource",
					"description": "Invoke function scopedForResource",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.scopedForResource(resource='{{$parameter[\"resource\"]}}')"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Summarize Work From Anywhere Devices",
					"value": "Device Management User Experience Analytics Summarize Work From Anywhere Devices",
					"action": "Invoke function userExperienceAnalyticsSummarizeWorkFromAnywhereDevices",
					"description": "Invoke function userExperienceAnalyticsSummarizeWorkFromAnywhereDevices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.userExperienceAnalyticsSummarizeWorkFromAnywhereDevices()"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Summarized Device Scopes",
					"value": "Device Management User Experience Analytics Summarized Device Scopes",
					"action": "Invoke function userExperienceAnalyticsSummarizedDeviceScopes",
					"description": "Invoke function userExperienceAnalyticsSummarizedDeviceScopes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.userExperienceAnalyticsSummarizedDeviceScopes()"
						}
					}
				},
				{
					"name": "Device Management Verify Windows Enrollment Auto Discovery",
					"value": "Device Management Verify Windows Enrollment Auto Discovery",
					"action": "Invoke function verifyWindowsEnrollmentAutoDiscovery",
					"description": "Invoke function verifyWindowsEnrollmentAutoDiscovery",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoft.graph.verifyWindowsEnrollmentAutoDiscovery(domainName='{{$parameter[\"domainName\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Monitoring Alert Records Get Portal Notifications",
					"value": "Device Management Monitoring Alert Records Get Portal Notifications",
					"action": "Invoke function getPortalNotifications",
					"description": "Invoke function getPortalNotifications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring/alertRecords/microsoft.graph.deviceManagement.getPortalNotifications()"
						}
					}
				},
				{
					"name": "Device Management Resource Operations Resource Operation Get Scopes For User",
					"value": "Device Management Resource Operations Resource Operation Get Scopes For User",
					"action": "Invoke function getScopesForUser",
					"description": "Invoke function getScopesForUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceOperations/{{$parameter[\"resourceOperation-id\"]}}/microsoft.graph.getScopesForUser(userid='{{$parameter[\"userid\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Has Custom Role Scope Tag",
					"value": "Device Management Role Scope Tags Has Custom Role Scope Tag",
					"action": "Invoke function hasCustomRoleScopeTag",
					"description": "Invoke function hasCustomRoleScopeTag",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleScopeTags/microsoft.graph.hasCustomRoleScopeTag()"
						}
					}
				},
				{
					"name": "Device Management Templates Device Management Template Compare",
					"value": "Device Management Templates Device Management Template Compare",
					"action": "Invoke function compare",
					"description": "Invoke function compare",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/microsoft.graph.compare(templateId='{{$parameter[\"templateId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Templates Device Management Template Migratable To Device Management Template Compare",
					"value": "Device Management Templates Device Management Template Migratable To Device Management Template Compare",
					"action": "Invoke function compare",
					"description": "Invoke function compare",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/microsoft.graph.compare(templateId='{{$parameter[\"templateId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Tenant Attach RBAC Get State",
					"value": "Device Management Tenant Attach RBAC Get State",
					"action": "Invoke function getState",
					"description": "Invoke function getState",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/tenantAttachRBAC/microsoft.graph.getState()"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Device Performance Summarize Device Performance Devices",
					"value": "Device Management User Experience Analytics Device Performance Summarize Device Performance Devices",
					"action": "Invoke function summarizeDevicePerformanceDevices",
					"description": "Invoke function summarizeDevicePerformanceDevices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDevicePerformance/microsoft.graph.summarizeDevicePerformanceDevices(summarizeBy='{{$parameter[\"summarizeBy\"]}}')"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection",
					"value": "Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection",
					"action": "Invoke function summarizeDeviceRemoteConnection",
					"description": "Invoke function summarizeDeviceRemoteConnection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection/microsoft.graph.summarizeDeviceRemoteConnection(summarizeBy='{{$parameter[\"summarizeBy\"]}}')"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance",
					"value": "Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance",
					"action": "Invoke function summarizeDeviceResourcePerformance",
					"description": "Invoke function summarizeDeviceResourcePerformance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance/microsoft.graph.summarizeDeviceResourcePerformance(summarizeBy='{{$parameter[\"summarizeBy\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Audit Events Get Audit Activity Types",
					"value": "Device Management Virtual Endpoint Audit Events Get Audit Activity Types",
					"action": "Invoke function getAuditActivityTypes",
					"description": "Invoke function getAuditActivityTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents/microsoft.graph.getAuditActivityTypes()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"action": "Invoke function getCloudPcConnectivityHistory",
					"description": "Invoke function getCloudPcConnectivityHistory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcConnectivityHistory()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"action": "Invoke function getCloudPcLaunchInfo",
					"description": "Invoke function getCloudPcLaunchInfo",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcLaunchInfo()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"action": "Invoke function getShiftWorkCloudPcAccessState",
					"description": "Invoke function getShiftWorkCloudPcAccessState",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getShiftWorkCloudPcAccessState()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"action": "Invoke function getSupportedCloudPcRemoteActions",
					"description": "Invoke function getSupportedCloudPcRemoteActions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getSupportedCloudPcRemoteActions()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Device Images Get Source Images",
					"value": "Device Management Virtual Endpoint Device Images Get Source Images",
					"action": "Invoke function getSourceImages",
					"description": "Invoke function getSourceImages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages/microsoft.graph.getSourceImages()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Effective Permissions",
					"value": "Device Management Virtual Endpoint Get Effective Permissions",
					"action": "Invoke function getEffectivePermissions",
					"description": "Invoke function getEffectivePermissions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/microsoft.graph.getEffectivePermissions()"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Real Time Remote Connection Latency",
					"value": "Device Management Virtual Endpoint Reports Get Real Time Remote Connection Latency",
					"action": "Invoke function getRealTimeRemoteConnectionLatency",
					"description": "Invoke function getRealTimeRemoteConnectionLatency",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getRealTimeRemoteConnectionLatency(cloudPcId='{{$parameter[\"cloudPcId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Real Time Remote Connection Status",
					"value": "Device Management Virtual Endpoint Reports Get Real Time Remote Connection Status",
					"action": "Invoke function getRealTimeRemoteConnectionStatus",
					"description": "Invoke function getRealTimeRemoteConnectionStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getRealTimeRemoteConnectionStatus(cloudPcId='{{$parameter[\"cloudPcId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Snapshots Get Storage Accounts",
					"value": "Device Management Virtual Endpoint Snapshots Get Storage Accounts",
					"action": "Invoke function getStorageAccounts",
					"description": "Invoke function getStorageAccounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/snapshots/microsoft.graph.getStorageAccounts(subscriptionId='{{$parameter[\"subscriptionId\"]}}')"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Snapshots Get Subscriptions",
					"value": "Device Management Virtual Endpoint Snapshots Get Subscriptions",
					"action": "Invoke function getSubscriptions",
					"description": "Invoke function getSubscriptions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/snapshots/microsoft.graph.getSubscriptions()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/applePushNotificationCertificate/microsoft.graph.downloadApplePushNotificationCertificateSigningRequest()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Apple Push Notification Certificate Download Apple Push Notification Certificate Signing Request"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/assignmentFilters/microsoft.graph.getPlatformSupportedProperties(platform='{platform}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"required": true,
			"description": "Usage: platform='{platform}'",
			"default": "android",
			"type": "options",
			"options": [
				{
					"name": "Android",
					"value": "android"
				},
				{
					"name": "Android For Work",
					"value": "androidForWork"
				},
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Mac OS",
					"value": "macOS"
				},
				{
					"name": "Windows Phone 81",
					"value": "windowsPhone81"
				},
				{
					"name": "Windows 81 And Later",
					"value": "windows81AndLater"
				},
				{
					"name": "Windows 10 And Later",
					"value": "windows10AndLater"
				},
				{
					"name": "Android Work Profile",
					"value": "androidWorkProfile"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				},
				{
					"name": "Android AOSP",
					"value": "androidAOSP"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get Platform Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/assignmentFilters/microsoft.graph.getState()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Get State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}/microsoft.graph.getSupportedProperties()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Assignment Filters Device And App Management Assignment Filter Get Supported Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/auditEvents/microsoft.graph.getAuditActivityTypes(category='{category}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"required": true,
			"description": "Usage: category='{category}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/auditEvents/microsoft.graph.getAuditCategories()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Audit Events Get Audit Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/microsoft.graph.appDiagnostics(upn='{upn}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Upn",
			"name": "upn",
			"required": true,
			"description": "Usage: upn='{upn}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.getCloudPcRemoteActionResults()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.getCloudPcReviewStatus()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.getFileVaultKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.getNonCompliantSettings()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.getOemWarranty()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Get Oem Warranty"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{sessionKey}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"required": true,
			"description": "Usage: sessionKey='{sessionKey}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configManagerCollections/microsoft.graph.getPolicySummary(policyId='{policyId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Config Manager Collections Get Policy Summary"
					]
				}
			}
		},
		{
			"displayName": "Policy ID",
			"name": "policyId",
			"required": true,
			"description": "Usage: policyId='{policyId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Config Manager Collections Get Policy Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/microsoft.graph.getExpiringVppTokenCount(expiringBeforeDateTime='{expiringBeforeDateTime}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Expiring Vpp Token Count"
					]
				}
			}
		},
		{
			"displayName": "Expiring Before Date Time",
			"name": "expiringBeforeDateTime",
			"required": true,
			"description": "Usage: expiringBeforeDateTime='{expiringBeforeDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Expiring Vpp Token Count"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/microsoft.graph.exportMobileConfig()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Export Mobile Config"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.getEncryptionPublicKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Get Encryption Public Key"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/microsoft.graph.getDevicesScheduledToRetire()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Devices Scheduled To Retire"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/microsoft.graph.getIosAvailableUpdateVersions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Get Ios Available Update Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/microsoft.graph.getOmaSettingPlainTextValue(secretReferenceValueId='{secretReferenceValueId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Get Oma Setting Plain Text Value"
					]
				}
			}
		},
		{
			"displayName": "Secret Reference Value ID",
			"name": "secretReferenceValueId",
			"required": true,
			"description": "Usage: secretReferenceValueId='{secretReferenceValueId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Get Oma Setting Plain Text Value"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceHealthScripts/microsoft.graph.areGlobalScriptsAvailable()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Health Scripts Are Global Scripts Available"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceHealthScripts/microsoft.graph.getRemediationSummary()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Health Scripts Get Remediation Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/microsoft.graph.getRemediationHistory()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Get Remediation History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/microsoft.graph.compare(templateId='{templateId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Template ID",
			"name": "templateId",
			"required": true,
			"description": "Usage: templateId='{templateId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Compare"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/microsoft.graph.appDiagnostics(upn='{upn}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Upn",
			"name": "upn",
			"required": true,
			"description": "Usage: upn='{upn}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcRemoteActionResults()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcReviewStatus()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.getFileVaultKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.getNonCompliantSettings()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.getOemWarranty()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Get Oem Warranty"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{sessionKey}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"required": true,
			"description": "Usage: sessionKey='{sessionKey}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getAssignedRoleDetails()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Assigned Role Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getComanagedDevicesSummary()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Comanaged Devices Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getComanagementEligibleDevicesSummary()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Comanagement Eligible Devices Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getEffectivePermissions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 1 F 5 F"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getEffectivePermissions(scope='{scope}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"description": "Usage: scope='{scope}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Effective Permissions 5 B 91"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getRoleScopeTagsByIds(ids={ids})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "Usage: ids={ids}",
			"default": "[\n  null\n]",
			"type": "json",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Ids"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getRoleScopeTagsByResource(resource='{resource}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"required": true,
			"description": "Usage: resource='{resource}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Role Scope Tags By Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.getSuggestedEnrollmentLimit(enrollmentType='{enrollmentType}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Suggested Enrollment Limit"
					]
				}
			}
		},
		{
			"displayName": "Enrollment Type",
			"name": "enrollmentType",
			"required": true,
			"description": "Usage: enrollmentType='{enrollmentType}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Get Suggested Enrollment Limit"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.scopedForResource(resource='{resource}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Scoped For Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"required": true,
			"description": "Usage: resource='{resource}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Scoped For Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.userExperienceAnalyticsSummarizeWorkFromAnywhereDevices()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Summarize Work From Anywhere Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.userExperienceAnalyticsSummarizedDeviceScopes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Summarized Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoft.graph.verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Verify Windows Enrollment Auto Discovery"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "domainName",
			"required": true,
			"description": "Usage: domainName='{domainName}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Verify Windows Enrollment Auto Discovery"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring/alertRecords/microsoft.graph.deviceManagement.getPortalNotifications()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Get Portal Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/resourceOperations/{resourceOperation-id}/microsoft.graph.getScopesForUser(userid='{userid}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Userid",
			"name": "userid",
			"required": true,
			"description": "Usage: userid='{userid}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Resource Operations Resource Operation Get Scopes For User"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleScopeTags/microsoft.graph.hasCustomRoleScopeTag()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Role Scope Tags Has Custom Role Scope Tag"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/microsoft.graph.compare(templateId='{templateId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Template ID",
			"name": "templateId",
			"required": true,
			"description": "Usage: templateId='{templateId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/microsoft.graph.compare(templateId='{templateId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Template ID",
			"name": "templateId",
			"required": true,
			"description": "Usage: templateId='{templateId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Compare"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/tenantAttachRBAC/microsoft.graph.getState()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Tenant Attach RBAC Get State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDevicePerformance/microsoft.graph.summarizeDevicePerformanceDevices(summarizeBy='{summarizeBy}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Summarize By",
			"name": "summarizeBy",
			"required": true,
			"description": "Usage: summarizeBy='{summarizeBy}'",
			"default": "none",
			"type": "options",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Model",
					"value": "model"
				},
				{
					"name": "All Regressions",
					"value": "allRegressions"
				},
				{
					"name": "Model Regression",
					"value": "modelRegression"
				},
				{
					"name": "Manufacturer Regression",
					"value": "manufacturerRegression"
				},
				{
					"name": "Operating System Version Regression",
					"value": "operatingSystemVersionRegression"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Performance Summarize Device Performance Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsRemoteConnection/microsoft.graph.summarizeDeviceRemoteConnection(summarizeBy='{summarizeBy}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Summarize By",
			"name": "summarizeBy",
			"required": true,
			"description": "Usage: summarizeBy='{summarizeBy}'",
			"default": "none",
			"type": "options",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Model",
					"value": "model"
				},
				{
					"name": "All Regressions",
					"value": "allRegressions"
				},
				{
					"name": "Model Regression",
					"value": "modelRegression"
				},
				{
					"name": "Manufacturer Regression",
					"value": "manufacturerRegression"
				},
				{
					"name": "Operating System Version Regression",
					"value": "operatingSystemVersionRegression"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Remote Connection Summarize Device Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsResourcePerformance/microsoft.graph.summarizeDeviceResourcePerformance(summarizeBy='{summarizeBy}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Summarize By",
			"name": "summarizeBy",
			"required": true,
			"description": "Usage: summarizeBy='{summarizeBy}'",
			"default": "none",
			"type": "options",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Model",
					"value": "model"
				},
				{
					"name": "All Regressions",
					"value": "allRegressions"
				},
				{
					"name": "Model Regression",
					"value": "modelRegression"
				},
				{
					"name": "Manufacturer Regression",
					"value": "manufacturerRegression"
				},
				{
					"name": "Operating System Version Regression",
					"value": "operatingSystemVersionRegression"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management User Experience Analytics Resource Performance Summarize Device Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/auditEvents/microsoft.graph.getAuditActivityTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Audit Events Get Audit Activity Types"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcConnectivityHistory()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcLaunchInfo()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Cloud Pc Launch Info"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.getShiftWorkCloudPcAccessState()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.getSupportedCloudPcRemoteActions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/deviceImages/microsoft.graph.getSourceImages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Get Source Images"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/microsoft.graph.getEffectivePermissions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Effective Permissions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/reports/microsoft.graph.getRealTimeRemoteConnectionLatency(cloudPcId='{cloudPcId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Real Time Remote Connection Latency"
					]
				}
			}
		},
		{
			"displayName": "Cloud Pc ID",
			"name": "cloudPcId",
			"required": true,
			"description": "Usage: cloudPcId='{cloudPcId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Real Time Remote Connection Latency"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/reports/microsoft.graph.getRealTimeRemoteConnectionStatus(cloudPcId='{cloudPcId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Real Time Remote Connection Status"
					]
				}
			}
		},
		{
			"displayName": "Cloud Pc ID",
			"name": "cloudPcId",
			"required": true,
			"description": "Usage: cloudPcId='{cloudPcId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Real Time Remote Connection Status"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/snapshots/microsoft.graph.getStorageAccounts(subscriptionId='{subscriptionId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"required": true,
			"description": "Usage: subscriptionId='{subscriptionId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Storage Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/snapshots/microsoft.graph.getSubscriptions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Functions"
					],
					"operation": [
						"Device Management Virtual Endpoint Snapshots Get Subscriptions"
					]
				}
			}
		},
];
