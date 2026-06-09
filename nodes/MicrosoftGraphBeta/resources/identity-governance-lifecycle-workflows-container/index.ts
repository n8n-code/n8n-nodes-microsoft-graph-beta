import type { INodeProperties } from 'n8n-workflow';

export const identityGovernanceLifecycleWorkflowsContainerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Delete Lifecycle Workflows",
					"value": "Identity Governance Delete Lifecycle Workflows",
					"action": "Delete navigation property lifecycleWorkflows for identityGovernance",
					"description": "Delete navigation property lifecycleWorkflows for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/lifecycleWorkflows"
						}
					}
				},
				{
					"name": "Identity Governance Get Lifecycle Workflows",
					"value": "Identity Governance Get Lifecycle Workflows",
					"action": "Get lifecycleWorkflows from identityGovernance",
					"description": "Get lifecycleWorkflows from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows"
						}
					}
				},
				{
					"name": "Identity Governance Update Lifecycle Workflows",
					"value": "Identity Governance Update Lifecycle Workflows",
					"action": "Update the navigation property lifecycleWorkflows in identityGovernance",
					"description": "Update the navigation property lifecycleWorkflows in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/lifecycleWorkflows"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows List Custom Task Extensions",
					"value": "Identity Governance Lifecycle Workflows List Custom Task Extensions",
					"action": "List customTaskExtensions",
					"description": "Get a list of the customTaskExtension objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Create Custom Task Extensions",
					"value": "Identity Governance Lifecycle Workflows Create Custom Task Extensions",
					"action": "Create customTaskExtensions",
					"description": "Create a new customTaskExtension object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Delete Custom Task Extensions",
					"value": "Identity Governance Lifecycle Workflows Delete Custom Task Extensions",
					"action": "Delete navigation property customTaskExtensions for identityGovernance",
					"description": "Delete navigation property customTaskExtensions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions/{{$parameter[\"customTaskExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Custom Task Extensions",
					"value": "Identity Governance Lifecycle Workflows Get Custom Task Extensions",
					"action": "Get customTaskExtensions from identityGovernance",
					"description": "The customTaskExtension instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions/{{$parameter[\"customTaskExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Update Custom Task Extensions",
					"value": "Identity Governance Lifecycle Workflows Update Custom Task Extensions",
					"action": "Update the navigation property customTaskExtensions in identityGovernance",
					"description": "Update the navigation property customTaskExtensions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions/{{$parameter[\"customTaskExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Custom Task Extensions Get Created By",
					"value": "Identity Governance Lifecycle Workflows Custom Task Extensions Get Created By",
					"action": "Get createdBy from identityGovernance",
					"description": "The unique identifier of the Azure AD user that created the custom task extension.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions/{{$parameter[\"customTaskExtension-id\"]}}/createdBy"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Custom Task Extensions Get Last Modified By",
					"value": "Identity Governance Lifecycle Workflows Custom Task Extensions Get Last Modified By",
					"action": "Get lastModifiedBy from identityGovernance",
					"description": "The unique identifier of the Azure AD user that modified the custom task extension last.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/customTaskExtensions/{{$parameter[\"customTaskExtension-id\"]}}/lastModifiedBy"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Delete Deleted Items",
					"value": "Identity Governance Lifecycle Workflows Delete Deleted Items",
					"action": "Delete navigation property deletedItems for identityGovernance",
					"description": "Delete navigation property deletedItems for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Deleted Items",
					"value": "Identity Governance Lifecycle Workflows Get Deleted Items",
					"action": "Get deletedItems from identityGovernance",
					"description": "Deleted workflows in your lifecycle workflows instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items List Workflows",
					"value": "Identity Governance Lifecycle Workflows Deleted Items List Workflows",
					"action": "List deletedItems (deleted lifecycle workflows)",
					"description": "Get a list of the deleted workflow objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Delete Workflows",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Delete Workflows",
					"action": "Delete navigation property workflows for identityGovernance",
					"description": "Delete navigation property workflows for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Get Workflows",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Get Workflows",
					"action": "Get workflows from identityGovernance",
					"description": "Deleted workflows that end up in the deletedItemsContainer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope",
					"action": "Get executionScope from identityGovernance",
					"description": "The unique identifier of the Azure AD identity that last modified the workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/executionScope"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Execution Scope",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Execution Scope",
					"action": "Get executionScope from identityGovernance",
					"description": "The unique identifier of the Azure AD identity that last modified the workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/executionScope/{{$parameter[\"user-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs",
					"action": "List runs (for a lifecycle workflow)",
					"description": "Get a list of the run objects and their properties for a lifecycle workflow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Runs",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Runs",
					"action": "Get runs from identityGovernance",
					"description": "Get runs from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results",
					"action": "List taskProcessingResults (for a run)",
					"description": "Get the taskProcessingResult resources for a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The related taskProcessingResults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results",
					"action": "List userProcessingResults (for a run of a lifecycle workflow)",
					"description": "Get user processing results of a workflow run object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get User Processing Results",
					"action": "Get userProcessingResults from identityGovernance",
					"description": "The associated individual user execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the AAD user targeted for the taskProcessingResult.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results",
					"action": "List taskProcessingResults (for a userProcessingResult)",
					"description": "Get the task processing result from a userProcessingResult either directly or through a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The associated individual task execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports",
					"action": "List taskReports (for a lifecycle workflow)",
					"description": "Get a list of the taskReport objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Task Reports",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Task Reports",
					"action": "Get taskReports from identityGovernance",
					"description": "Represents the aggregation of task execution data for tasks within a workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related lifecycle workflow task.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Definition",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Definition",
					"action": "Get taskDefinition from identityGovernance",
					"description": "The taskDefinition associated with the related lifecycle workflow task.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskDefinition"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results",
					"action": "List taskProcessingResult (for a taskReport)",
					"description": "Get the task processing result resources from the taskReport.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The related lifecycle workflow taskProcessingResults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results",
					"action": "List userProcessingResults (for a lifecycle workflow)",
					"description": "Get the **userProcessingResult** resources for a workflow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get User Processing Results",
					"action": "Get userProcessingResults from identityGovernance",
					"description": "Get userProcessingResults from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the AAD user targeted for the taskProcessingResult.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results",
					"action": "List taskProcessingResults (for a userProcessingResult)",
					"description": "Get the task processing result from a userProcessingResult either directly or through a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The associated individual task execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions",
					"action": "List versions (of a lifecycle workflow)",
					"description": "Get a list of the workflowVersion objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Versions",
					"value": "Identity Governance Lifecycle Workflows Deleted Items Workflows Get Versions",
					"action": "Get versions from identityGovernance",
					"description": "The workflow versions that are available.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{{$parameter[\"workflow-id\"]}}/versions/{{$parameter[\"workflowVersion-versionNumber\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Settings",
					"value": "Identity Governance Lifecycle Workflows Get Settings",
					"action": "Get lifecycleManagementSettings (tenant settings for Lifecycle Workflows)",
					"description": "Read the properties and relationships of a lifecycleManagementSettings object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/settings"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Update Settings",
					"value": "Identity Governance Lifecycle Workflows Update Settings",
					"action": "Update lifecycleManagementSettings (tenant settings for Lifecycle Workflows)",
					"description": "Update the properties of a lifecycleManagementSettings object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/lifecycleWorkflows/settings"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows List Task Definitions",
					"value": "Identity Governance Lifecycle Workflows List Task Definitions",
					"action": "List taskDefinitions",
					"description": "Get a list of the taskDefinition objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/taskDefinitions"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Task Definitions",
					"value": "Identity Governance Lifecycle Workflows Get Task Definitions",
					"action": "Get taskDefinitions from identityGovernance",
					"description": "The definition of tasks within the lifecycle workflows instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/taskDefinitions/{{$parameter[\"taskDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows List Workflow Templates",
					"value": "Identity Governance Lifecycle Workflows List Workflow Templates",
					"action": "List workflowTemplates",
					"description": "Get a list of the workflowTemplate objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Workflow Templates",
					"value": "Identity Governance Lifecycle Workflows Get Workflow Templates",
					"action": "Get workflowTemplates from identityGovernance",
					"description": "The workflow templates in the lifecycle workflow instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates List Tasks",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates List Tasks",
					"action": "Get tasks from identityGovernance",
					"description": "Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates Get Tasks",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates Get Tasks",
					"action": "Get tasks from identityGovernance",
					"description": "Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks/{{$parameter[\"task-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The result of processing the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks/{{$parameter[\"task-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The result of processing the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks/{{$parameter[\"task-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks/{{$parameter[\"task-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflowTemplates/{{$parameter[\"workflowTemplate-id\"]}}/tasks/{{$parameter[\"task-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows List Workflows",
					"value": "Identity Governance Lifecycle Workflows List Workflows",
					"action": "List workflows (in Lifecycle Workflows)",
					"description": "Get the workflow resources from the workflows navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Create Workflows",
					"value": "Identity Governance Lifecycle Workflows Create Workflows",
					"action": "Create workflow (lifecycle workflow)",
					"description": "Create a new workflow object. You can create up to 50 workflows in a tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Delete Workflows",
					"value": "Identity Governance Lifecycle Workflows Delete Workflows",
					"action": "Delete navigation property workflows for identityGovernance",
					"description": "Delete navigation property workflows for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Get Workflows",
					"value": "Identity Governance Lifecycle Workflows Get Workflows",
					"action": "Get workflows from identityGovernance",
					"description": "The workflows in the lifecycle workflows instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Update Workflows",
					"value": "Identity Governance Lifecycle Workflows Update Workflows",
					"action": "Update the navigation property workflows in identityGovernance",
					"description": "Update the navigation property workflows in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows List Execution Scope",
					"value": "Identity Governance Lifecycle Workflows Workflows List Execution Scope",
					"action": "Get executionScope from identityGovernance",
					"description": "The unique identifier of the Azure AD identity that last modified the workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/executionScope"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Get Execution Scope",
					"value": "Identity Governance Lifecycle Workflows Workflows Get Execution Scope",
					"action": "Get executionScope from identityGovernance",
					"description": "The unique identifier of the Azure AD identity that last modified the workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/executionScope/{{$parameter[\"user-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows List Runs",
					"value": "Identity Governance Lifecycle Workflows Workflows List Runs",
					"action": "List runs (for a lifecycle workflow)",
					"description": "Get a list of the run objects and their properties for a lifecycle workflow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Get Runs",
					"value": "Identity Governance Lifecycle Workflows Workflows Get Runs",
					"action": "Get runs from identityGovernance",
					"description": "Get runs from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results",
					"action": "List taskProcessingResults (for a run)",
					"description": "Get the taskProcessingResult resources for a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The related taskProcessingResults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results",
					"action": "List userProcessingResults (for a run of a lifecycle workflow)",
					"description": "Get user processing results of a workflow run object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs Get User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs Get User Processing Results",
					"action": "Get userProcessingResults from identityGovernance",
					"description": "The associated individual user execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the AAD user targeted for the taskProcessingResult.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results",
					"action": "List taskProcessingResults (for a userProcessingResult)",
					"description": "Get the task processing result from a userProcessingResult either directly or through a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The associated individual task execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/runs/{{$parameter[\"run-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows List Task Reports",
					"value": "Identity Governance Lifecycle Workflows Workflows List Task Reports",
					"action": "List taskReports (for a lifecycle workflow)",
					"description": "Get a list of the taskReport objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Get Task Reports",
					"value": "Identity Governance Lifecycle Workflows Workflows Get Task Reports",
					"action": "Get taskReports from identityGovernance",
					"description": "Represents the aggregation of task execution data for tasks within a workflow object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related lifecycle workflow task.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Definition",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Definition",
					"action": "Get taskDefinition from identityGovernance",
					"description": "The taskDefinition associated with the related lifecycle workflow task.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskDefinition"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results",
					"action": "List taskProcessingResult (for a taskReport)",
					"description": "Get the task processing result resources from the taskReport.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The related lifecycle workflow taskProcessingResults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/taskReports/{{$parameter[\"taskReport-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows List User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows List User Processing Results",
					"action": "List userProcessingResults (for a lifecycle workflow)",
					"description": "Get the **userProcessingResult** resources for a workflow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Get User Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows Get User Processing Results",
					"action": "Get userProcessingResults from identityGovernance",
					"description": "Get userProcessingResults from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows User Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows User Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the AAD user targeted for the taskProcessingResult.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results",
					"action": "List taskProcessingResults (for a userProcessingResult)",
					"description": "Get the task processing result from a userProcessingResult either directly or through a run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows User Processing Results Get Task Processing Results",
					"value": "Identity Governance Lifecycle Workflows Workflows User Processing Results Get Task Processing Results",
					"action": "Get taskProcessingResults from identityGovernance",
					"description": "The associated individual task execution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Subject",
					"value": "Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Subject",
					"action": "Get subject from identityGovernance",
					"description": "The unique identifier of the Azure AD user targeted for the task execution.Supports $filter(eq, ne) and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Task",
					"value": "Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Task",
					"action": "Get task from identityGovernance",
					"description": "The related workflow task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/userProcessingResults/{{$parameter[\"userProcessingResult-id\"]}}/taskProcessingResults/{{$parameter[\"taskProcessingResult-id\"]}}/task"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows List Versions",
					"value": "Identity Governance Lifecycle Workflows Workflows List Versions",
					"action": "List versions (of a lifecycle workflow)",
					"description": "Get a list of the workflowVersion objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Lifecycle Workflows Workflows Get Versions",
					"value": "Identity Governance Lifecycle Workflows Workflows Get Versions",
					"action": "Get versions from identityGovernance",
					"description": "The workflow versions that are available.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/lifecycleWorkflows/workflows/{{$parameter[\"workflow-id\"]}}/versions/{{$parameter[\"workflowVersion-versionNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identityGovernance/lifecycleWorkflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Delete Lifecycle Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Delete Lifecycle Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Get Lifecycle Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Get Lifecycle Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Get Lifecycle Workflows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Update Lifecycle Workflows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Update Lifecycle Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/customTaskExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/lifecycleWorkflows/customTaskExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Create Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/lifecycleWorkflows/customTaskExtensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Create Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Custom Task Extensions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Custom Task Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Created By"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Created By"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Created By"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/lastModifiedBy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Last Modified By"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Last Modified By"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Custom Task Extensions Get Last Modified By"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/lifecycleWorkflows/deletedItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Deleted Items"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Deleted Items"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Deleted Items"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items List Workflows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Delete Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Delete Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Get Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Get Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Get Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Execution Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{user-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Execution Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs List User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs Get User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Runs User Processing Results Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Task Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Task Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Definition"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Definition"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Task Reports Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows User Processing Results Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows List Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Deleted Items Workflows Get Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Settings"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Settings"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/taskDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Task Definitions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflow Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflow Templates"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflow Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates List Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Get Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Get Tasks"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflow Templates Tasks Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows List Workflows"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/lifecycleWorkflows/workflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Create Workflows"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/lifecycleWorkflows/workflows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Create Workflows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Delete Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflows"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Get Workflows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Workflows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Update Workflows"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Execution Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{user-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Execution Scope"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Execution Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Runs"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs List User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs Get User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Runs User Processing Results Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Task Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Task Reports"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Task Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Definition"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Definition"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Task Reports Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get User Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get User Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results List Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Task Processing Results"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Get Task Processing Results"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Subject"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Task"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows User Processing Results Task Processing Results Get Task"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows List Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Versions"
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
						"Identity Governance Lifecycle Workflows Container"
					],
					"operation": [
						"Identity Governance Lifecycle Workflows Workflows Get Versions"
					]
				}
			}
		},
];
