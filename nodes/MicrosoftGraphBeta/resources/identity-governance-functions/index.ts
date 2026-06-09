import type { INodeProperties } from 'n8n-workflow';

export const identityGovernanceFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Access Reviews Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"value": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"value": "Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests Filter By Current User",
					"value": "Identity Governance App Consent App Consent Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User",
					"value": "Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignmentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignment Resource Roles My",
					"value": "Identity Governance Entitlement Management Access Package Assignment Resource Roles My",
					"action": "Invoke function My",
					"description": "Invoke function My",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/microsoft.graph.My()"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignments Additional Access",
					"value": "Identity Governance Entitlement Management Access Package Assignments Additional Access",
					"action": "Invoke function additionalAccess",
					"description": "Invoke function additionalAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.additionalAccess()"
						}
					}
				},
				{
					"name": "GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID",
					"value": "GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID",
					"action": "Invoke function additionalAccess",
					"description": "Invoke function additionalAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.additionalAccess(accessPackageId='{{$parameter[\"accessPackageId\"]}}',incompatibleAccessPackageId='{{$parameter[\"incompatibleAccessPackageId\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignments Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Package Assignments Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignments/{{$parameter[\"accessPackageAssignment-id\"]}}/accessPackageAssignmentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My",
					"value": "Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My",
					"action": "Invoke function My",
					"description": "Invoke function My",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageAssignments/{{$parameter[\"accessPackageAssignment-id\"]}}/accessPackageAssignmentResourceRoles/microsoft.graph.My()"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Catalogs Search",
					"value": "Identity Governance Entitlement Management Access Package Catalogs Search",
					"action": "Invoke function Search",
					"description": "Invoke function Search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageCatalogs/microsoft.graph.Search()"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search",
					"value": "Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search",
					"action": "Invoke function Search",
					"description": "Invoke function Search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageCatalogs/{{$parameter[\"accessPackageCatalog-id\"]}}/accessPackages/microsoft.graph.Search()"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackageCatalogs/{{$parameter[\"accessPackageCatalog-id\"]}}/accessPackages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Packages Search",
					"value": "Identity Governance Entitlement Management Access Packages Search",
					"action": "Invoke function Search",
					"description": "Invoke function Search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackages/microsoft.graph.Search()"
						}
					}
				},
				{
					"name": "Identity Governance Entitlement Management Access Packages Filter By Current User",
					"value": "Identity Governance Entitlement Management Access Packages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/entitlementManagement/accessPackages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Summary",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Run User Processing Results Summary",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Run User Processing Results Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Task Reports Summary",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Task Reports Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow User Processing Results Summary",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow User Processing Results Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Workflow Runs Summary",
					"value": "Identity Governance Lifecycle Workflows Workflows Workflow Runs Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Workflow Runs Run User Processing Results Summary",
					"value": "Identity Governance Lifecycle Workflows Workflows Workflow Runs Run User Processing Results Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Workflow Task Reports Summary",
					"value": "Identity Governance Lifecycle Workflows Workflows Workflow Task Reports Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Workflow User Processing Results Summary",
					"value": "Identity Governance Lifecycle Workflows Workflows Workflow User Processing Results Summary",
					"action": "Invoke function summary",
					"description": "Invoke function summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedules Filter By Current User",
					"value": "Identity Governance Privileged Access Group Assignment Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User",
					"value": "Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Access Review Schedule Definition Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignmentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/microsoft.graph.My()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignment Resource Roles My"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.additionalAccess()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Additional Access"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.additionalAccess(accessPackageId='{accessPackageId}',incompatibleAccessPackageId='{incompatibleAccessPackageId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
					]
				}
			}
		},
		{
			"displayName": "Access Package ID",
			"name": "accessPackageId",
			"required": true,
			"description": "Usage: accessPackageId='{accessPackageId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
					]
				}
			}
		},
		{
			"displayName": "Incompatible Access Package ID",
			"name": "incompatibleAccessPackageId",
			"required": true,
			"description": "Usage: incompatibleAccessPackageId='{incompatibleAccessPackageId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
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
						"Identity Governance Functions"
					],
					"operation": [
						"GET Identity Governance Entitlement Management Access Package Assignments Microsoft Graph Additional Access Access Package ID Access Package ID Incompatible Access Package ID Incompatible Access Package ID"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignments/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentResourceRoles/microsoft.graph.My()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Assignments Access Package Assignment Access Package Assignment Resource Roles My"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageCatalogs/microsoft.graph.Search()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Search"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/microsoft.graph.Search()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Search"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "allowedRequestor",
			"type": "options",
			"options": [
				{
					"name": "Allowed Requestor",
					"value": "allowedRequestor"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Package Catalogs Access Package Catalog Access Packages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackages/microsoft.graph.Search()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Search"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/entitlementManagement/accessPackages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "allowedRequestor",
			"type": "options",
			"options": [
				{
					"name": "Allowed Requestor",
					"value": "allowedRequestor"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Entitlement Management Access Packages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Runs Run User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow Task Reports Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Workflow User Processing Results Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
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
						"Identity Governance Functions"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
];
