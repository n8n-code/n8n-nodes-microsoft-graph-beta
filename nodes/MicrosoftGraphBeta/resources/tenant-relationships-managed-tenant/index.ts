import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsManagedTenantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships Delete Managed Tenants",
					"value": "Tenant Relationships Delete Managed Tenants",
					"action": "Delete navigation property managedTenants for tenantRelationships",
					"description": "Delete navigation property managedTenants for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants"
						}
					}
				},
				{
					"name": "Tenant Relationships Get Managed Tenants",
					"value": "Tenant Relationships Get Managed Tenants",
					"action": "Get managedTenants from tenantRelationships",
					"description": "The operations available to interact with the multi-tenant management platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants"
						}
					}
				},
				{
					"name": "Tenant Relationships Update Managed Tenants",
					"value": "Tenant Relationships Update Managed Tenants",
					"action": "Update the navigation property managedTenants in tenantRelationships",
					"description": "Update the navigation property managedTenants in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Aggregated Policy Compliances",
					"value": "Tenant Relationships Managed Tenants List Aggregated Policy Compliances",
					"action": "List aggregatedPolicyCompliances",
					"description": "Get a list of the aggregatedPolicyCompliance objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/aggregatedPolicyCompliances"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Aggregated Policy Compliances",
					"value": "Tenant Relationships Managed Tenants Create Aggregated Policy Compliances",
					"action": "Create new navigation property to aggregatedPolicyCompliances for tenantRelationships",
					"description": "Create new navigation property to aggregatedPolicyCompliances for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/aggregatedPolicyCompliances"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Aggregated Policy Compliances",
					"value": "Tenant Relationships Managed Tenants Delete Aggregated Policy Compliances",
					"action": "Delete navigation property aggregatedPolicyCompliances for tenantRelationships",
					"description": "Delete navigation property aggregatedPolicyCompliances for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{{$parameter[\"aggregatedPolicyCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Aggregated Policy Compliances",
					"value": "Tenant Relationships Managed Tenants Get Aggregated Policy Compliances",
					"action": "Get aggregatedPolicyCompliances from tenantRelationships",
					"description": "Aggregate view of device compliance policies across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{{$parameter[\"aggregatedPolicyCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Aggregated Policy Compliances",
					"value": "Tenant Relationships Managed Tenants Update Aggregated Policy Compliances",
					"action": "Update the navigation property aggregatedPolicyCompliances in tenantRelationships",
					"description": "Update the navigation property aggregatedPolicyCompliances in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{{$parameter[\"aggregatedPolicyCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Audit Events",
					"value": "Tenant Relationships Managed Tenants List Audit Events",
					"action": "Get auditEvents from tenantRelationships",
					"description": "The collection of audit events across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/auditEvents"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Audit Events",
					"value": "Tenant Relationships Managed Tenants Create Audit Events",
					"action": "Create new navigation property to auditEvents for tenantRelationships",
					"description": "Create new navigation property to auditEvents for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/auditEvents"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Audit Events",
					"value": "Tenant Relationships Managed Tenants Delete Audit Events",
					"action": "Delete navigation property auditEvents for tenantRelationships",
					"description": "Delete navigation property auditEvents for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Audit Events",
					"value": "Tenant Relationships Managed Tenants Get Audit Events",
					"action": "Get auditEvents from tenantRelationships",
					"description": "The collection of audit events across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Audit Events",
					"value": "Tenant Relationships Managed Tenants Update Audit Events",
					"action": "Update the navigation property auditEvents in tenantRelationships",
					"description": "Update the navigation property auditEvents in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Cloud Pc Connections",
					"value": "Tenant Relationships Managed Tenants List Cloud Pc Connections",
					"action": "List cloudPcConnections",
					"description": "Get a list of the cloudPcConnection objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcConnections"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Cloud Pc Connections",
					"value": "Tenant Relationships Managed Tenants Create Cloud Pc Connections",
					"action": "Create new navigation property to cloudPcConnections for tenantRelationships",
					"description": "Create new navigation property to cloudPcConnections for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/cloudPcConnections"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Cloud Pc Connections",
					"value": "Tenant Relationships Managed Tenants Delete Cloud Pc Connections",
					"action": "Delete navigation property cloudPcConnections for tenantRelationships",
					"description": "Delete navigation property cloudPcConnections for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/cloudPcConnections/{{$parameter[\"cloudPcConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Cloud Pc Connections",
					"value": "Tenant Relationships Managed Tenants Get Cloud Pc Connections",
					"action": "Get cloudPcConnections from tenantRelationships",
					"description": "The collection of cloud PC connections across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcConnections/{{$parameter[\"cloudPcConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Cloud Pc Connections",
					"value": "Tenant Relationships Managed Tenants Update Cloud Pc Connections",
					"action": "Update the navigation property cloudPcConnections in tenantRelationships",
					"description": "Update the navigation property cloudPcConnections in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/cloudPcConnections/{{$parameter[\"cloudPcConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Cloud Pc Devices",
					"value": "Tenant Relationships Managed Tenants List Cloud Pc Devices",
					"action": "List cloudPcDevices",
					"description": "Get a list of the cloudPcDevice objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcDevices"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Cloud Pc Devices",
					"value": "Tenant Relationships Managed Tenants Create Cloud Pc Devices",
					"action": "Create new navigation property to cloudPcDevices for tenantRelationships",
					"description": "Create new navigation property to cloudPcDevices for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/cloudPcDevices"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Cloud Pc Devices",
					"value": "Tenant Relationships Managed Tenants Delete Cloud Pc Devices",
					"action": "Delete navigation property cloudPcDevices for tenantRelationships",
					"description": "Delete navigation property cloudPcDevices for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/cloudPcDevices/{{$parameter[\"cloudPcDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Cloud Pc Devices",
					"value": "Tenant Relationships Managed Tenants Get Cloud Pc Devices",
					"action": "Get cloudPcDevices from tenantRelationships",
					"description": "The collection of cloud PC devices across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcDevices/{{$parameter[\"cloudPcDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Cloud Pc Devices",
					"value": "Tenant Relationships Managed Tenants Update Cloud Pc Devices",
					"action": "Update the navigation property cloudPcDevices in tenantRelationships",
					"description": "Update the navigation property cloudPcDevices in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/cloudPcDevices/{{$parameter[\"cloudPcDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Cloud Pcs Overview",
					"value": "Tenant Relationships Managed Tenants List Cloud Pcs Overview",
					"action": "List cloudPcOverviews",
					"description": "Get a list of the cloudPcOverview objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcsOverview"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Cloud Pcs Overview",
					"value": "Tenant Relationships Managed Tenants Create Cloud Pcs Overview",
					"action": "Create new navigation property to cloudPcsOverview for tenantRelationships",
					"description": "Create new navigation property to cloudPcsOverview for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/cloudPcsOverview"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Cloud Pcs Overview",
					"value": "Tenant Relationships Managed Tenants Delete Cloud Pcs Overview",
					"action": "Delete navigation property cloudPcsOverview for tenantRelationships",
					"description": "Delete navigation property cloudPcsOverview for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/cloudPcsOverview/{{$parameter[\"cloudPcOverview-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Cloud Pcs Overview",
					"value": "Tenant Relationships Managed Tenants Get Cloud Pcs Overview",
					"action": "Get cloudPcsOverview from tenantRelationships",
					"description": "Overview of cloud PC information across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/cloudPcsOverview/{{$parameter[\"cloudPcOverview-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Cloud Pcs Overview",
					"value": "Tenant Relationships Managed Tenants Update Cloud Pcs Overview",
					"action": "Update the navigation property cloudPcsOverview in tenantRelationships",
					"description": "Update the navigation property cloudPcsOverview in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/cloudPcsOverview/{{$parameter[\"cloudPcOverview-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Conditional Access Policy Coverages",
					"value": "Tenant Relationships Managed Tenants List Conditional Access Policy Coverages",
					"action": "List conditionalAccessPolicyCoverages",
					"description": "Get a list of the conditionalAccessPolicyCoverage objects and their properties. Use this operation to list of Azure Active Directory conditional access policy coverage across all tenants that are being managed by the multi-tenant management platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Conditional Access Policy Coverages",
					"value": "Tenant Relationships Managed Tenants Create Conditional Access Policy Coverages",
					"action": "Create new navigation property to conditionalAccessPolicyCoverages for tenantRelationships",
					"description": "Create new navigation property to conditionalAccessPolicyCoverages for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Conditional Access Policy Coverages",
					"value": "Tenant Relationships Managed Tenants Delete Conditional Access Policy Coverages",
					"action": "Delete navigation property conditionalAccessPolicyCoverages for tenantRelationships",
					"description": "Delete navigation property conditionalAccessPolicyCoverages for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{{$parameter[\"conditionalAccessPolicyCoverage-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Conditional Access Policy Coverages",
					"value": "Tenant Relationships Managed Tenants Get Conditional Access Policy Coverages",
					"action": "Get conditionalAccessPolicyCoverages from tenantRelationships",
					"description": "Aggregate view of conditional access policy coverage across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{{$parameter[\"conditionalAccessPolicyCoverage-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Conditional Access Policy Coverages",
					"value": "Tenant Relationships Managed Tenants Update Conditional Access Policy Coverages",
					"action": "Update the navigation property conditionalAccessPolicyCoverages in tenantRelationships",
					"description": "Update the navigation property conditionalAccessPolicyCoverages in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{{$parameter[\"conditionalAccessPolicyCoverage-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Credential User Registrations Summaries",
					"value": "Tenant Relationships Managed Tenants List Credential User Registrations Summaries",
					"action": "List credentialUserRegistrationsSummaries",
					"description": "Get a list of the credentialUserRegistrationsSummary objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Credential User Registrations Summaries",
					"value": "Tenant Relationships Managed Tenants Create Credential User Registrations Summaries",
					"action": "Create new navigation property to credentialUserRegistrationsSummaries for tenantRelationships",
					"description": "Create new navigation property to credentialUserRegistrationsSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Credential User Registrations Summaries",
					"value": "Tenant Relationships Managed Tenants Delete Credential User Registrations Summaries",
					"action": "Delete navigation property credentialUserRegistrationsSummaries for tenantRelationships",
					"description": "Delete navigation property credentialUserRegistrationsSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{{$parameter[\"credentialUserRegistrationsSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Credential User Registrations Summaries",
					"value": "Tenant Relationships Managed Tenants Get Credential User Registrations Summaries",
					"action": "Get credentialUserRegistrationsSummaries from tenantRelationships",
					"description": "Summary information for user registration for multi-factor authentication and self service password reset across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{{$parameter[\"credentialUserRegistrationsSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Credential User Registrations Summaries",
					"value": "Tenant Relationships Managed Tenants Update Credential User Registrations Summaries",
					"action": "Update the navigation property credentialUserRegistrationsSummaries in tenantRelationships",
					"description": "Update the navigation property credentialUserRegistrationsSummaries in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{{$parameter[\"credentialUserRegistrationsSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries",
					"value": "Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries",
					"action": "List deviceCompliancePolicySettingStateSummary",
					"description": "Get a list of the deviceCompliancePolicySettingStateSummary objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Device Compliance Policy Setting State Summaries",
					"value": "Tenant Relationships Managed Tenants Create Device Compliance Policy Setting State Summaries",
					"action": "Create new navigation property to deviceCompliancePolicySettingStateSummaries for tenantRelationships",
					"description": "Create new navigation property to deviceCompliancePolicySettingStateSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Device Compliance Policy Setting State Summaries",
					"value": "Tenant Relationships Managed Tenants Delete Device Compliance Policy Setting State Summaries",
					"action": "Delete navigation property deviceCompliancePolicySettingStateSummaries for tenantRelationships",
					"description": "Delete navigation property deviceCompliancePolicySettingStateSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Device Compliance Policy Setting State Summaries",
					"value": "Tenant Relationships Managed Tenants Get Device Compliance Policy Setting State Summaries",
					"action": "Get deviceCompliancePolicySettingStateSummaries from tenantRelationships",
					"description": "Summary information for device compliance policy setting states across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Device Compliance Policy Setting State Summaries",
					"value": "Tenant Relationships Managed Tenants Update Device Compliance Policy Setting State Summaries",
					"action": "Update the navigation property deviceCompliancePolicySettingStateSummaries in tenantRelationships",
					"description": "Update the navigation property deviceCompliancePolicySettingStateSummaries in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Device Compliance Trends",
					"value": "Tenant Relationships Managed Tenants List Managed Device Compliance Trends",
					"action": "List managedDeviceComplianceTrends",
					"description": "Get a list of the managedDeviceComplianceTrend objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedDeviceComplianceTrends"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Device Compliance Trends",
					"value": "Tenant Relationships Managed Tenants Create Managed Device Compliance Trends",
					"action": "Create new navigation property to managedDeviceComplianceTrends for tenantRelationships",
					"description": "Create new navigation property to managedDeviceComplianceTrends for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedDeviceComplianceTrends"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Device Compliance Trends",
					"value": "Tenant Relationships Managed Tenants Delete Managed Device Compliance Trends",
					"action": "Delete navigation property managedDeviceComplianceTrends for tenantRelationships",
					"description": "Delete navigation property managedDeviceComplianceTrends for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{{$parameter[\"managedDeviceComplianceTrend-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Device Compliance Trends",
					"value": "Tenant Relationships Managed Tenants Get Managed Device Compliance Trends",
					"action": "Get managedDeviceComplianceTrends from tenantRelationships",
					"description": "Trend insights for device compliance across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{{$parameter[\"managedDeviceComplianceTrend-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Device Compliance Trends",
					"value": "Tenant Relationships Managed Tenants Update Managed Device Compliance Trends",
					"action": "Update the navigation property managedDeviceComplianceTrends in tenantRelationships",
					"description": "Update the navigation property managedDeviceComplianceTrends in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{{$parameter[\"managedDeviceComplianceTrend-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Device Compliances",
					"value": "Tenant Relationships Managed Tenants List Managed Device Compliances",
					"action": "List managedDeviceCompliances",
					"description": "Get a list of the managedDeviceCompliance objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedDeviceCompliances"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Device Compliances",
					"value": "Tenant Relationships Managed Tenants Create Managed Device Compliances",
					"action": "Create new navigation property to managedDeviceCompliances for tenantRelationships",
					"description": "Create new navigation property to managedDeviceCompliances for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedDeviceCompliances"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Device Compliances",
					"value": "Tenant Relationships Managed Tenants Delete Managed Device Compliances",
					"action": "Delete navigation property managedDeviceCompliances for tenantRelationships",
					"description": "Delete navigation property managedDeviceCompliances for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedDeviceCompliances/{{$parameter[\"managedDeviceCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Device Compliances",
					"value": "Tenant Relationships Managed Tenants Get Managed Device Compliances",
					"action": "Get managedDeviceCompliances from tenantRelationships",
					"description": "The collection of compliance for managed devices across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedDeviceCompliances/{{$parameter[\"managedDeviceCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Device Compliances",
					"value": "Tenant Relationships Managed Tenants Update Managed Device Compliances",
					"action": "Update the navigation property managedDeviceCompliances in tenantRelationships",
					"description": "Update the navigation property managedDeviceCompliances in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedDeviceCompliances/{{$parameter[\"managedDeviceCompliance-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Alert Logs",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Alert Logs",
					"action": "Get managedTenantAlertLogs from tenantRelationships",
					"description": "Get managedTenantAlertLogs from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Logs",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Logs",
					"action": "Create new navigation property to managedTenantAlertLogs for tenantRelationships",
					"description": "Create new navigation property to managedTenantAlertLogs for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Logs",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Logs",
					"action": "Delete navigation property managedTenantAlertLogs for tenantRelationships",
					"description": "Delete navigation property managedTenantAlertLogs for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs/{{$parameter[\"managedTenantAlertLog-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Logs",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Logs",
					"action": "Get managedTenantAlertLogs from tenantRelationships",
					"description": "Get managedTenantAlertLogs from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs/{{$parameter[\"managedTenantAlertLog-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Logs",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Logs",
					"action": "Update the navigation property managedTenantAlertLogs in tenantRelationships",
					"description": "Update the navigation property managedTenantAlertLogs in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs/{{$parameter[\"managedTenantAlertLog-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Logs Get Alert",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Logs Get Alert",
					"action": "Get alert from tenantRelationships",
					"description": "Get alert from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertLogs/{{$parameter[\"managedTenantAlertLog-id\"]}}/alert"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions",
					"action": "Get managedTenantAlertRuleDefinitions from tenantRelationships",
					"description": "Get managedTenantAlertRuleDefinitions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Rule Definitions",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Rule Definitions",
					"action": "Create new navigation property to managedTenantAlertRuleDefinitions for tenantRelationships",
					"description": "Create new navigation property to managedTenantAlertRuleDefinitions for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rule Definitions",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rule Definitions",
					"action": "Delete navigation property managedTenantAlertRuleDefinitions for tenantRelationships",
					"description": "Delete navigation property managedTenantAlertRuleDefinitions for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{{$parameter[\"managedTenantAlertRuleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Rule Definitions",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Rule Definitions",
					"action": "Get managedTenantAlertRuleDefinitions from tenantRelationships",
					"description": "Get managedTenantAlertRuleDefinitions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{{$parameter[\"managedTenantAlertRuleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Rule Definitions",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Rule Definitions",
					"action": "Update the navigation property managedTenantAlertRuleDefinitions in tenantRelationships",
					"description": "Update the navigation property managedTenantAlertRuleDefinitions in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{{$parameter[\"managedTenantAlertRuleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules",
					"action": "Get alertRules from tenantRelationships",
					"description": "Get alertRules from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{{$parameter[\"managedTenantAlertRuleDefinition-id\"]}}/alertRules"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions Get Alert Rules",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions Get Alert Rules",
					"action": "Get alertRules from tenantRelationships",
					"description": "Get alertRules from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{{$parameter[\"managedTenantAlertRuleDefinition-id\"]}}/alertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Alert Rules",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Alert Rules",
					"action": "Get managedTenantAlertRules from tenantRelationships",
					"description": "Get managedTenantAlertRules from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Rules",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Alert Rules",
					"action": "Create new navigation property to managedTenantAlertRules for tenantRelationships",
					"description": "Create new navigation property to managedTenantAlertRules for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rules",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rules",
					"action": "Delete navigation property managedTenantAlertRules for tenantRelationships",
					"description": "Delete navigation property managedTenantAlertRules for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Rules",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Alert Rules",
					"action": "Get managedTenantAlertRules from tenantRelationships",
					"description": "Get managedTenantAlertRules from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Rules",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Alert Rules",
					"action": "Update the navigation property managedTenantAlertRules in tenantRelationships",
					"description": "Update the navigation property managedTenantAlertRules in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts",
					"action": "Get alerts from tenantRelationships",
					"description": "Get alerts from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}/alerts"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Alerts",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Alerts",
					"action": "Get alerts from tenantRelationships",
					"description": "Get alerts from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}/alerts/{{$parameter[\"managedTenantAlert-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Rule Definition",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Rule Definition",
					"action": "Get ruleDefinition from tenantRelationships",
					"description": "Get ruleDefinition from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlertRules/{{$parameter[\"managedTenantAlertRule-id\"]}}/ruleDefinition"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Alerts",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Alerts",
					"action": "Get managedTenantAlerts from tenantRelationships",
					"description": "Get managedTenantAlerts from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Alerts",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Alerts",
					"action": "Create new navigation property to managedTenantAlerts for tenantRelationships",
					"description": "Create new navigation property to managedTenantAlerts for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Alerts",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Alerts",
					"action": "Delete navigation property managedTenantAlerts for tenantRelationships",
					"description": "Delete navigation property managedTenantAlerts for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Alerts",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Alerts",
					"action": "Get managedTenantAlerts from tenantRelationships",
					"description": "Get managedTenantAlerts from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Alerts",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Alerts",
					"action": "Update the navigation property managedTenantAlerts in tenantRelationships",
					"description": "Update the navigation property managedTenantAlerts in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs",
					"action": "Get alertLogs from tenantRelationships",
					"description": "Get alertLogs from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/alertLogs"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Logs",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Logs",
					"action": "Get alertLogs from tenantRelationships",
					"description": "Get alertLogs from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/alertLogs/{{$parameter[\"managedTenantAlertLog-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Rule",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Rule",
					"action": "Get alertRule from tenantRelationships",
					"description": "Get alertRule from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/alertRule"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications",
					"action": "Get apiNotifications from tenantRelationships",
					"description": "Get apiNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/apiNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get API Notifications",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get API Notifications",
					"action": "Get apiNotifications from tenantRelationships",
					"description": "Get apiNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/apiNotifications/{{$parameter[\"managedTenantApiNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications",
					"action": "Get emailNotifications from tenantRelationships",
					"description": "Get emailNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/emailNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Email Notifications",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts Get Email Notifications",
					"action": "Get emailNotifications from tenantRelationships",
					"description": "Get emailNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/emailNotifications/{{$parameter[\"managedTenantEmailNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant API Notifications",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant API Notifications",
					"action": "Get managedTenantApiNotifications from tenantRelationships",
					"description": "Get managedTenantApiNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant API Notifications",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant API Notifications",
					"action": "Create new navigation property to managedTenantApiNotifications for tenantRelationships",
					"description": "Create new navigation property to managedTenantApiNotifications for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant API Notifications",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant API Notifications",
					"action": "Delete navigation property managedTenantApiNotifications for tenantRelationships",
					"description": "Delete navigation property managedTenantApiNotifications for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications/{{$parameter[\"managedTenantApiNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant API Notifications",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant API Notifications",
					"action": "Get managedTenantApiNotifications from tenantRelationships",
					"description": "Get managedTenantApiNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications/{{$parameter[\"managedTenantApiNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant API Notifications",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant API Notifications",
					"action": "Update the navigation property managedTenantApiNotifications in tenantRelationships",
					"description": "Update the navigation property managedTenantApiNotifications in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications/{{$parameter[\"managedTenantApiNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant API Notifications Get Alert",
					"value": "Tenant Relationships Managed Tenants Managed Tenant API Notifications Get Alert",
					"action": "Get alert from tenantRelationships",
					"description": "Get alert from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantApiNotifications/{{$parameter[\"managedTenantApiNotification-id\"]}}/alert"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Email Notifications",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Email Notifications",
					"action": "Get managedTenantEmailNotifications from tenantRelationships",
					"description": "Get managedTenantEmailNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Email Notifications",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Email Notifications",
					"action": "Create new navigation property to managedTenantEmailNotifications for tenantRelationships",
					"description": "Create new navigation property to managedTenantEmailNotifications for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Email Notifications",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Email Notifications",
					"action": "Delete navigation property managedTenantEmailNotifications for tenantRelationships",
					"description": "Delete navigation property managedTenantEmailNotifications for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications/{{$parameter[\"managedTenantEmailNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Email Notifications",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Email Notifications",
					"action": "Get managedTenantEmailNotifications from tenantRelationships",
					"description": "Get managedTenantEmailNotifications from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications/{{$parameter[\"managedTenantEmailNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Email Notifications",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Email Notifications",
					"action": "Update the navigation property managedTenantEmailNotifications in tenantRelationships",
					"description": "Update the navigation property managedTenantEmailNotifications in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications/{{$parameter[\"managedTenantEmailNotification-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Email Notifications Get Alert",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Email Notifications Get Alert",
					"action": "Get alert from tenantRelationships",
					"description": "Get alert from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantEmailNotifications/{{$parameter[\"managedTenantEmailNotification-id\"]}}/alert"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints",
					"value": "Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints",
					"action": "Get managedTenantTicketingEndpoints from tenantRelationships",
					"description": "Get managedTenantTicketingEndpoints from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantTicketingEndpoints"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Managed Tenant Ticketing Endpoints",
					"value": "Tenant Relationships Managed Tenants Create Managed Tenant Ticketing Endpoints",
					"action": "Create new navigation property to managedTenantTicketingEndpoints for tenantRelationships",
					"description": "Create new navigation property to managedTenantTicketingEndpoints for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantTicketingEndpoints"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Managed Tenant Ticketing Endpoints",
					"value": "Tenant Relationships Managed Tenants Delete Managed Tenant Ticketing Endpoints",
					"action": "Delete navigation property managedTenantTicketingEndpoints for tenantRelationships",
					"description": "Delete navigation property managedTenantTicketingEndpoints for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{{$parameter[\"managedTenantTicketingEndpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Managed Tenant Ticketing Endpoints",
					"value": "Tenant Relationships Managed Tenants Get Managed Tenant Ticketing Endpoints",
					"action": "Get managedTenantTicketingEndpoints from tenantRelationships",
					"description": "Get managedTenantTicketingEndpoints from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{{$parameter[\"managedTenantTicketingEndpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Managed Tenant Ticketing Endpoints",
					"value": "Tenant Relationships Managed Tenants Update Managed Tenant Ticketing Endpoints",
					"action": "Update the navigation property managedTenantTicketingEndpoints in tenantRelationships",
					"description": "Update the navigation property managedTenantTicketingEndpoints in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{{$parameter[\"managedTenantTicketingEndpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses",
					"value": "Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses",
					"action": "List managementActionTenantDeploymentStatus",
					"description": "Get a list of the managementActionTenantDeploymentStatus objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Action Tenant Deployment Statuses",
					"value": "Tenant Relationships Managed Tenants Create Management Action Tenant Deployment Statuses",
					"action": "Create new navigation property to managementActionTenantDeploymentStatuses for tenantRelationships",
					"description": "Create new navigation property to managementActionTenantDeploymentStatuses for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Action Tenant Deployment Statuses",
					"value": "Tenant Relationships Managed Tenants Delete Management Action Tenant Deployment Statuses",
					"action": "Delete navigation property managementActionTenantDeploymentStatuses for tenantRelationships",
					"description": "Delete navigation property managementActionTenantDeploymentStatuses for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{{$parameter[\"managementActionTenantDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Action Tenant Deployment Statuses",
					"value": "Tenant Relationships Managed Tenants Get Management Action Tenant Deployment Statuses",
					"action": "Get managementActionTenantDeploymentStatuses from tenantRelationships",
					"description": "The tenant level status of management actions across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{{$parameter[\"managementActionTenantDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Action Tenant Deployment Statuses",
					"value": "Tenant Relationships Managed Tenants Update Management Action Tenant Deployment Statuses",
					"action": "Update the navigation property managementActionTenantDeploymentStatuses in tenantRelationships",
					"description": "Update the navigation property managementActionTenantDeploymentStatuses in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{{$parameter[\"managementActionTenantDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Actions",
					"value": "Tenant Relationships Managed Tenants List Management Actions",
					"action": "List managementActions",
					"description": "Get a list of the managementAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementActions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Actions",
					"value": "Tenant Relationships Managed Tenants Create Management Actions",
					"action": "Create new navigation property to managementActions for tenantRelationships",
					"description": "Create new navigation property to managementActions for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementActions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Actions",
					"value": "Tenant Relationships Managed Tenants Delete Management Actions",
					"action": "Delete navigation property managementActions for tenantRelationships",
					"description": "Delete navigation property managementActions for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementActions/{{$parameter[\"managementAction-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Actions",
					"value": "Tenant Relationships Managed Tenants Get Management Actions",
					"action": "Get managementActions from tenantRelationships",
					"description": "The collection of baseline management actions across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementActions/{{$parameter[\"managementAction-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Actions",
					"value": "Tenant Relationships Managed Tenants Update Management Actions",
					"action": "Update the navigation property managementActions in tenantRelationships",
					"description": "Update the navigation property managementActions in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementActions/{{$parameter[\"managementAction-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Intents",
					"value": "Tenant Relationships Managed Tenants List Management Intents",
					"action": "List managementIntents",
					"description": "Get a list of the managementIntent objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementIntents"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Intents",
					"value": "Tenant Relationships Managed Tenants Create Management Intents",
					"action": "Create new navigation property to managementIntents for tenantRelationships",
					"description": "Create new navigation property to managementIntents for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementIntents"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Intents",
					"value": "Tenant Relationships Managed Tenants Delete Management Intents",
					"action": "Delete navigation property managementIntents for tenantRelationships",
					"description": "Delete navigation property managementIntents for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementIntents/{{$parameter[\"managementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Intents",
					"value": "Tenant Relationships Managed Tenants Get Management Intents",
					"action": "Get managementIntents from tenantRelationships",
					"description": "The collection of baseline management intents across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementIntents/{{$parameter[\"managementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Intents",
					"value": "Tenant Relationships Managed Tenants Update Management Intents",
					"action": "Update the navigation property managementIntents in tenantRelationships",
					"description": "Update the navigation property managementIntents in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementIntents/{{$parameter[\"managementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries",
					"action": "Get managementTemplateCollectionTenantSummaries from tenantRelationships",
					"description": "Get managementTemplateCollectionTenantSummaries from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Template Collection Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Create Management Template Collection Tenant Summaries",
					"action": "Create new navigation property to managementTemplateCollectionTenantSummaries for tenantRelationships",
					"description": "Create new navigation property to managementTemplateCollectionTenantSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Template Collection Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Delete Management Template Collection Tenant Summaries",
					"action": "Delete navigation property managementTemplateCollectionTenantSummaries for tenantRelationships",
					"description": "Delete navigation property managementTemplateCollectionTenantSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{{$parameter[\"managementTemplateCollectionTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Template Collection Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Get Management Template Collection Tenant Summaries",
					"action": "Get managementTemplateCollectionTenantSummaries from tenantRelationships",
					"description": "Get managementTemplateCollectionTenantSummaries from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{{$parameter[\"managementTemplateCollectionTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Template Collection Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Update Management Template Collection Tenant Summaries",
					"action": "Update the navigation property managementTemplateCollectionTenantSummaries in tenantRelationships",
					"description": "Update the navigation property managementTemplateCollectionTenantSummaries in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{{$parameter[\"managementTemplateCollectionTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Template Collections",
					"value": "Tenant Relationships Managed Tenants List Management Template Collections",
					"action": "Get managementTemplateCollections from tenantRelationships",
					"description": "Get managementTemplateCollections from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Create Management Template Collections",
					"action": "Create new navigation property to managementTemplateCollections for tenantRelationships",
					"description": "Create new navigation property to managementTemplateCollections for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Delete Management Template Collections",
					"action": "Delete navigation property managementTemplateCollections for tenantRelationships",
					"description": "Delete navigation property managementTemplateCollections for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Get Management Template Collections",
					"action": "Get managementTemplateCollections from tenantRelationships",
					"description": "Get managementTemplateCollections from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Update Management Template Collections",
					"action": "Update the navigation property managementTemplateCollections in tenantRelationships",
					"description": "Update the navigation property managementTemplateCollections in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Collections List Management Templates",
					"value": "Tenant Relationships Managed Tenants Management Template Collections List Management Templates",
					"action": "Get managementTemplates from tenantRelationships",
					"description": "Get managementTemplates from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}/managementTemplates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Collections Get Management Templates",
					"value": "Tenant Relationships Managed Tenants Management Template Collections Get Management Templates",
					"action": "Get managementTemplates from tenantRelationships",
					"description": "Get managementTemplates from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries",
					"action": "Get managementTemplateStepTenantSummaries from tenantRelationships",
					"description": "Get managementTemplateStepTenantSummaries from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Template Step Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Create Management Template Step Tenant Summaries",
					"action": "Create new navigation property to managementTemplateStepTenantSummaries for tenantRelationships",
					"description": "Create new navigation property to managementTemplateStepTenantSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Template Step Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Delete Management Template Step Tenant Summaries",
					"action": "Delete navigation property managementTemplateStepTenantSummaries for tenantRelationships",
					"description": "Delete navigation property managementTemplateStepTenantSummaries for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{{$parameter[\"managementTemplateStepTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Template Step Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Get Management Template Step Tenant Summaries",
					"action": "Get managementTemplateStepTenantSummaries from tenantRelationships",
					"description": "Get managementTemplateStepTenantSummaries from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{{$parameter[\"managementTemplateStepTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Template Step Tenant Summaries",
					"value": "Tenant Relationships Managed Tenants Update Management Template Step Tenant Summaries",
					"action": "Update the navigation property managementTemplateStepTenantSummaries in tenantRelationships",
					"description": "Update the navigation property managementTemplateStepTenantSummaries in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{{$parameter[\"managementTemplateStepTenantSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Template Step Versions",
					"value": "Tenant Relationships Managed Tenants List Management Template Step Versions",
					"action": "Get managementTemplateStepVersions from tenantRelationships",
					"description": "Get managementTemplateStepVersions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Template Step Versions",
					"value": "Tenant Relationships Managed Tenants Create Management Template Step Versions",
					"action": "Create new navigation property to managementTemplateStepVersions for tenantRelationships",
					"description": "Create new navigation property to managementTemplateStepVersions for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Template Step Versions",
					"value": "Tenant Relationships Managed Tenants Delete Management Template Step Versions",
					"action": "Delete navigation property managementTemplateStepVersions for tenantRelationships",
					"description": "Delete navigation property managementTemplateStepVersions for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Template Step Versions",
					"value": "Tenant Relationships Managed Tenants Get Management Template Step Versions",
					"action": "Get managementTemplateStepVersions from tenantRelationships",
					"description": "Get managementTemplateStepVersions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Template Step Versions",
					"value": "Tenant Relationships Managed Tenants Update Management Template Step Versions",
					"action": "Update the navigation property managementTemplateStepVersions in tenantRelationships",
					"description": "Update the navigation property managementTemplateStepVersions in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Get Accepted For",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Get Accepted For",
					"action": "Get acceptedFor from tenantRelationships",
					"description": "Get acceptedFor from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/acceptedFor"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions List Deployments",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions List Deployments",
					"action": "Get deployments from tenantRelationships",
					"description": "Get deployments from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Create Deployments",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Create Deployments",
					"action": "Create new navigation property to deployments for tenantRelationships",
					"description": "Create new navigation property to deployments for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Delete Deployments",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Delete Deployments",
					"action": "Delete navigation property deployments for tenantRelationships",
					"description": "Delete navigation property deployments for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments/{{$parameter[\"managementTemplateStepDeployment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Get Deployments",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Get Deployments",
					"action": "Get deployments from tenantRelationships",
					"description": "Get deployments from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments/{{$parameter[\"managementTemplateStepDeployment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Update Deployments",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Update Deployments",
					"action": "Update the navigation property deployments in tenantRelationships",
					"description": "Update the navigation property deployments in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments/{{$parameter[\"managementTemplateStepDeployment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Deployments Get Template Step Version",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Deployments Get Template Step Version",
					"action": "Get templateStepVersion from tenantRelationships",
					"description": "Get templateStepVersion from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments/{{$parameter[\"managementTemplateStepDeployment-id\"]}}/templateStepVersion"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Get Template Step",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Get Template Step",
					"action": "Get templateStep from tenantRelationships",
					"description": "Get templateStep from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/templateStep"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Template Steps",
					"value": "Tenant Relationships Managed Tenants List Management Template Steps",
					"action": "Get managementTemplateSteps from tenantRelationships",
					"description": "Get managementTemplateSteps from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Create Management Template Steps",
					"action": "Create new navigation property to managementTemplateSteps for tenantRelationships",
					"description": "Create new navigation property to managementTemplateSteps for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Delete Management Template Steps",
					"action": "Delete navigation property managementTemplateSteps for tenantRelationships",
					"description": "Delete navigation property managementTemplateSteps for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Get Management Template Steps",
					"action": "Get managementTemplateSteps from tenantRelationships",
					"description": "Get managementTemplateSteps from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Update Management Template Steps",
					"action": "Update the navigation property managementTemplateSteps in tenantRelationships",
					"description": "Update the navigation property managementTemplateSteps in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Steps Get Accepted Version",
					"value": "Tenant Relationships Managed Tenants Management Template Steps Get Accepted Version",
					"action": "Get acceptedVersion from tenantRelationships",
					"description": "Get acceptedVersion from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}/acceptedVersion"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Steps Get Management Template",
					"value": "Tenant Relationships Managed Tenants Management Template Steps Get Management Template",
					"action": "Get managementTemplate from tenantRelationships",
					"description": "Get managementTemplate from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}/managementTemplate"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Steps List Versions",
					"value": "Tenant Relationships Managed Tenants Management Template Steps List Versions",
					"action": "Get versions from tenantRelationships",
					"description": "Get versions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Steps Get Versions",
					"value": "Tenant Relationships Managed Tenants Management Template Steps Get Versions",
					"action": "Get versions from tenantRelationships",
					"description": "Get versions from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}/versions/{{$parameter[\"managementTemplateStepVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Management Templates",
					"value": "Tenant Relationships Managed Tenants List Management Templates",
					"action": "List managementTemplates",
					"description": "Get a list of the managementTemplate objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Management Templates",
					"value": "Tenant Relationships Managed Tenants Create Management Templates",
					"action": "Create new navigation property to managementTemplates for tenantRelationships",
					"description": "Create new navigation property to managementTemplates for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Management Templates",
					"value": "Tenant Relationships Managed Tenants Delete Management Templates",
					"action": "Delete navigation property managementTemplates for tenantRelationships",
					"description": "Delete navigation property managementTemplates for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Management Templates",
					"value": "Tenant Relationships Managed Tenants Get Management Templates",
					"action": "Get managementTemplates from tenantRelationships",
					"description": "The collection of baseline management templates across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Management Templates",
					"value": "Tenant Relationships Managed Tenants Update Management Templates",
					"action": "Update the navigation property managementTemplates in tenantRelationships",
					"description": "Update the navigation property managementTemplates in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Templates List Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Management Templates List Management Template Collections",
					"action": "Get managementTemplateCollections from tenantRelationships",
					"description": "Get managementTemplateCollections from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}/managementTemplateCollections"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Templates Get Management Template Collections",
					"value": "Tenant Relationships Managed Tenants Management Templates Get Management Template Collections",
					"action": "Get managementTemplateCollections from tenantRelationships",
					"description": "Get managementTemplateCollections from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}/managementTemplateCollections/{{$parameter[\"managementTemplateCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Templates List Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Management Templates List Management Template Steps",
					"action": "Get managementTemplateSteps from tenantRelationships",
					"description": "Get managementTemplateSteps from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}/managementTemplateSteps"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Templates Get Management Template Steps",
					"value": "Tenant Relationships Managed Tenants Management Templates Get Management Template Steps",
					"action": "Get managementTemplateSteps from tenantRelationships",
					"description": "Get managementTemplateSteps from tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/managementTemplates/{{$parameter[\"managementTemplate-id\"]}}/managementTemplateSteps/{{$parameter[\"managementTemplateStep-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List My Roles",
					"value": "Tenant Relationships Managed Tenants List My Roles",
					"action": "List myRoles",
					"description": "Get the roles that a signed-in user has through a delegated relationship across managed tenants. For information on the types of delegated relationships between a Managed Service Provider (MSP) who uses Microsoft 365 Lighthouse, and their business customers with Microsoft 365 Business Premium tenants, see the following articles on the Partner Center:\n- Delegated administration privileges (DAP)\n- Granular delegated admin privileges (GDAP)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/myRoles"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create My Roles",
					"value": "Tenant Relationships Managed Tenants Create My Roles",
					"action": "Create new navigation property to myRoles for tenantRelationships",
					"description": "Create new navigation property to myRoles for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/myRoles"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete My Roles",
					"value": "Tenant Relationships Managed Tenants Delete My Roles",
					"action": "Delete navigation property myRoles for tenantRelationships",
					"description": "Delete navigation property myRoles for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/myRoles/{{$parameter[\"myRole-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get My Roles",
					"value": "Tenant Relationships Managed Tenants Get My Roles",
					"action": "Get myRoles from tenantRelationships",
					"description": "The collection of role assignments to a signed-in user for a managed tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/myRoles/{{$parameter[\"myRole-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update My Roles",
					"value": "Tenant Relationships Managed Tenants Update My Roles",
					"action": "Update the navigation property myRoles in tenantRelationships",
					"description": "Update the navigation property myRoles in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/myRoles/{{$parameter[\"myRole-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Tenant Groups",
					"value": "Tenant Relationships Managed Tenants List Tenant Groups",
					"action": "List tenantGroups",
					"description": "Get a list of the tenantGroup objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantGroups"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Tenant Groups",
					"value": "Tenant Relationships Managed Tenants Create Tenant Groups",
					"action": "Create new navigation property to tenantGroups for tenantRelationships",
					"description": "Create new navigation property to tenantGroups for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantGroups"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Tenant Groups",
					"value": "Tenant Relationships Managed Tenants Delete Tenant Groups",
					"action": "Delete navigation property tenantGroups for tenantRelationships",
					"description": "Delete navigation property tenantGroups for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/tenantGroups/{{$parameter[\"tenantGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Tenant Groups",
					"value": "Tenant Relationships Managed Tenants Get Tenant Groups",
					"action": "Get tenantGroups from tenantRelationships",
					"description": "The collection of a logical grouping of managed tenants used by the multi-tenant management platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantGroups/{{$parameter[\"tenantGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Tenant Groups",
					"value": "Tenant Relationships Managed Tenants Update Tenant Groups",
					"action": "Update the navigation property tenantGroups in tenantRelationships",
					"description": "Update the navigation property tenantGroups in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/tenantGroups/{{$parameter[\"tenantGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Tenant Tags",
					"value": "Tenant Relationships Managed Tenants List Tenant Tags",
					"action": "List tenantTags",
					"description": "Get a list of the tenantTag objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantTags"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Tenant Tags",
					"value": "Tenant Relationships Managed Tenants Create Tenant Tags",
					"action": "Create tenantTag",
					"description": "Create a new tenantTag object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantTags"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Tenant Tags",
					"value": "Tenant Relationships Managed Tenants Delete Tenant Tags",
					"action": "Delete navigation property tenantTags for tenantRelationships",
					"description": "Delete navigation property tenantTags for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/tenantTags/{{$parameter[\"tenantTag-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Tenant Tags",
					"value": "Tenant Relationships Managed Tenants Get Tenant Tags",
					"action": "Get tenantTags from tenantRelationships",
					"description": "The collection of tenant tags across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantTags/{{$parameter[\"tenantTag-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Tenant Tags",
					"value": "Tenant Relationships Managed Tenants Update Tenant Tags",
					"action": "Update the navigation property tenantTags in tenantRelationships",
					"description": "Update the navigation property tenantTags in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/tenantTags/{{$parameter[\"tenantTag-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Tenants",
					"value": "Tenant Relationships Managed Tenants List Tenants",
					"action": "List tenants",
					"description": "Get a list of the tenant objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenants"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Tenants",
					"value": "Tenant Relationships Managed Tenants Create Tenants",
					"action": "Create new navigation property to tenants for tenantRelationships",
					"description": "Create new navigation property to tenants for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenants"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Tenants",
					"value": "Tenant Relationships Managed Tenants Delete Tenants",
					"action": "Delete navigation property tenants for tenantRelationships",
					"description": "Delete navigation property tenants for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/tenants/{{$parameter[\"tenant-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Tenants",
					"value": "Tenant Relationships Managed Tenants Get Tenants",
					"action": "Get tenants from tenantRelationships",
					"description": "The collection of tenants associated with the managing entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenants/{{$parameter[\"tenant-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Tenants",
					"value": "Tenant Relationships Managed Tenants Update Tenants",
					"action": "Update the navigation property tenants in tenantRelationships",
					"description": "Update the navigation property tenants in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/tenants/{{$parameter[\"tenant-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Tenants Customized Information",
					"value": "Tenant Relationships Managed Tenants List Tenants Customized Information",
					"action": "List tenantCustomizedInformation",
					"description": "Get a list of the tenantCustomizedInformation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantsCustomizedInformation"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Tenants Customized Information",
					"value": "Tenant Relationships Managed Tenants Create Tenants Customized Information",
					"action": "Create new navigation property to tenantsCustomizedInformation for tenantRelationships",
					"description": "Create new navigation property to tenantsCustomizedInformation for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantsCustomizedInformation"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Tenants Customized Information",
					"value": "Tenant Relationships Managed Tenants Delete Tenants Customized Information",
					"action": "Delete navigation property tenantsCustomizedInformation for tenantRelationships",
					"description": "Delete navigation property tenantsCustomizedInformation for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/tenantsCustomizedInformation/{{$parameter[\"tenantCustomizedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Tenants Customized Information",
					"value": "Tenant Relationships Managed Tenants Get Tenants Customized Information",
					"action": "Get tenantsCustomizedInformation from tenantRelationships",
					"description": "The collection of tenant level customized information across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantsCustomizedInformation/{{$parameter[\"tenantCustomizedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Tenants Customized Information",
					"value": "Tenant Relationships Managed Tenants Update Tenants Customized Information",
					"action": "Update the navigation property tenantsCustomizedInformation in tenantRelationships",
					"description": "Update the navigation property tenantsCustomizedInformation in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/tenantsCustomizedInformation/{{$parameter[\"tenantCustomizedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Tenants Detailed Information",
					"value": "Tenant Relationships Managed Tenants List Tenants Detailed Information",
					"action": "List tenantDetailedInformation",
					"description": "Get a list of the tenantDetailedInformation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantsDetailedInformation"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Tenants Detailed Information",
					"value": "Tenant Relationships Managed Tenants Create Tenants Detailed Information",
					"action": "Create new navigation property to tenantsDetailedInformation for tenantRelationships",
					"description": "Create new navigation property to tenantsDetailedInformation for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantsDetailedInformation"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Tenants Detailed Information",
					"value": "Tenant Relationships Managed Tenants Delete Tenants Detailed Information",
					"action": "Delete navigation property tenantsDetailedInformation for tenantRelationships",
					"description": "Delete navigation property tenantsDetailedInformation for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/tenantsDetailedInformation/{{$parameter[\"tenantDetailedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Tenants Detailed Information",
					"value": "Tenant Relationships Managed Tenants Get Tenants Detailed Information",
					"action": "Get tenantsDetailedInformation from tenantRelationships",
					"description": "The collection tenant level detailed information across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/tenantsDetailedInformation/{{$parameter[\"tenantDetailedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Tenants Detailed Information",
					"value": "Tenant Relationships Managed Tenants Update Tenants Detailed Information",
					"action": "Update the navigation property tenantsDetailedInformation in tenantRelationships",
					"description": "Update the navigation property tenantsDetailedInformation in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/tenantsDetailedInformation/{{$parameter[\"tenantDetailedInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Windows Device Malware States",
					"value": "Tenant Relationships Managed Tenants List Windows Device Malware States",
					"action": "List windowsDeviceMalwareStates",
					"description": "Get a list of the windowsDeviceMalwareState objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/windowsDeviceMalwareStates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Windows Device Malware States",
					"value": "Tenant Relationships Managed Tenants Create Windows Device Malware States",
					"action": "Create new navigation property to windowsDeviceMalwareStates for tenantRelationships",
					"description": "Create new navigation property to windowsDeviceMalwareStates for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/windowsDeviceMalwareStates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Windows Device Malware States",
					"value": "Tenant Relationships Managed Tenants Delete Windows Device Malware States",
					"action": "Delete navigation property windowsDeviceMalwareStates for tenantRelationships",
					"description": "Delete navigation property windowsDeviceMalwareStates for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Windows Device Malware States",
					"value": "Tenant Relationships Managed Tenants Get Windows Device Malware States",
					"action": "Get windowsDeviceMalwareStates from tenantRelationships",
					"description": "The state of malware for Windows devices, registered with Microsoft Endpoint Manager, across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Windows Device Malware States",
					"value": "Tenant Relationships Managed Tenants Update Windows Device Malware States",
					"action": "Update the navigation property windowsDeviceMalwareStates in tenantRelationships",
					"description": "Update the navigation property windowsDeviceMalwareStates in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants List Windows Protection States",
					"value": "Tenant Relationships Managed Tenants List Windows Protection States",
					"action": "List windowsProtectionStates",
					"description": "Get a list of the windowsProtectionState objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/windowsProtectionStates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Create Windows Protection States",
					"value": "Tenant Relationships Managed Tenants Create Windows Protection States",
					"action": "Create new navigation property to windowsProtectionStates for tenantRelationships",
					"description": "Create new navigation property to windowsProtectionStates for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/windowsProtectionStates"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Delete Windows Protection States",
					"value": "Tenant Relationships Managed Tenants Delete Windows Protection States",
					"action": "Delete navigation property windowsProtectionStates for tenantRelationships",
					"description": "Delete navigation property windowsProtectionStates for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/managedTenants/windowsProtectionStates/{{$parameter[\"windowsProtectionState-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Get Windows Protection States",
					"value": "Tenant Relationships Managed Tenants Get Windows Protection States",
					"action": "Get windowsProtectionStates from tenantRelationships",
					"description": "The protection state for Windows devices, registered with Microsoft Endpoint Manager, across managed tenants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/managedTenants/windowsProtectionStates/{{$parameter[\"windowsProtectionState-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Update Windows Protection States",
					"value": "Tenant Relationships Managed Tenants Update Windows Protection States",
					"action": "Update the navigation property windowsProtectionStates in tenantRelationships",
					"description": "Update the navigation property windowsProtectionStates in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/managedTenants/windowsProtectionStates/{{$parameter[\"windowsProtectionState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Delete Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Delete Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Get Managed Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Get Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Get Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Update Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Update Managed Tenants"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Aggregated Policy Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Aggregated Policy Compliances"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/auditEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Audit Events"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Audit Events"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Audit Events"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Audit Events"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Audit Events"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcConnections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Connections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pc Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Devices"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pc Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcsOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcsOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/cloudPcsOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pcs Overview"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Cloud Pcs Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Conditional Access Policy Coverages"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Conditional Access Policy Coverages"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Credential User Registrations Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Credential User Registrations Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Device Compliance Policy Setting State Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliance Trends"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Device Compliance Trends"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedDeviceCompliances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedDeviceCompliances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedDeviceCompliances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliances"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Device Compliances"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertLogs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Logs Get Alert"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Logs Get Alert"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Logs Get Alert"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rule Definitions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Rule Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions List Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions Get Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions Get Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rule Definitions Get Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlertRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rules"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules List Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Alerts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Rule Definition"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Rule Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alert Rules Get Rule Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlerts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alerts"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Logs"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Rule"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Rule"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Alert Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List API Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get API Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get API Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts List Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Get Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantApiNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantApiNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantApiNotifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant API Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant API Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant API Notifications Get Alert"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant API Notifications Get Alert"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant API Notifications Get Alert"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantEmailNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantEmailNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantEmailNotifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Email Notifications"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Email Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Email Notifications Get Alert"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Email Notifications Get Alert"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Email Notifications Get Alert"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Ticketing Endpoints"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Managed Tenant Ticketing Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Action Tenant Deployment Statuses"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Action Tenant Deployment Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Actions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Actions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Actions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementIntents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Intents"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementIntents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Intents"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementIntents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Intents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Intents"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Intents"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Intents"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Intents"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Intents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Intents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Intents"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collection Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Collection Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateCollections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateCollections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections List Management Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections Get Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections Get Management Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Collections Get Management Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Tenant Summaries"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Step Tenant Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepVersions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Step Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Accepted For"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Accepted For"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Accepted For"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions List Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Create Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Create Deployments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Delete Deployments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Delete Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Deployments"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Deployments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Update Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Update Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Deployments Get Template Step Version"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Deployments Get Template Step Version"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Deployments Get Template Step Version"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Template Step"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Template Step"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Get Template Step"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateSteps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateSteps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Accepted Version"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Accepted Version"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Accepted Version"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Management Template"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Management Template"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Management Template"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps List Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Versions"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Steps Get Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Management Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Management Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Templates"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Management Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Templates"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Management Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Management Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Collections"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates List Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Steps"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Templates Get Management Template Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/myRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List My Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/myRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create My Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create My Roles"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      {}\n    ]\n  }\n]",
			"description": "A collection of role assignments for the managed tenant.",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create My Roles"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"description": "The Azure Active Directory tenant identifier for the managed tenant. Optional. Read-only.",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create My Roles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete My Roles"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete My Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get My Roles"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get My Roles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get My Roles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update My Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update My Roles"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      {}\n    ]\n  }\n]",
			"description": "A collection of role assignments for the managed tenant.",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update My Roles"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"description": "The Azure Active Directory tenant identifier for the managed tenant. Optional. Read-only.",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update My Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Groups"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenant Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantTags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Tags"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenant Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenants/{tenant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantsCustomizedInformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantsCustomizedInformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantsCustomizedInformation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Customized Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants Customized Information"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantsDetailedInformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantsDetailedInformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantsDetailedInformation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Detailed Information"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Tenants Detailed Information"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Device Malware States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Windows Device Malware States"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/windowsProtectionStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants List Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/windowsProtectionStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/windowsProtectionStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Create Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Delete Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Protection States"
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
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Get Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Windows Protection States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Managed Tenant"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Update Windows Protection States"
					]
				}
			}
		},
];
