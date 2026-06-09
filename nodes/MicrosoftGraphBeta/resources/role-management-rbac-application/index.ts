import type { INodeProperties } from 'n8n-workflow';

export const roleManagementRbacApplicationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Delete Directory",
					"value": "Role Management Delete Directory",
					"action": "Delete navigation property directory for roleManagement",
					"description": "Delete navigation property directory for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory"
						}
					}
				},
				{
					"name": "Role Management Get Directory",
					"value": "Role Management Get Directory",
					"action": "Get directory from roleManagement",
					"description": "Get directory from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory"
						}
					}
				},
				{
					"name": "Role Management Update Directory",
					"value": "Role Management Update Directory",
					"action": "Update the navigation property directory in roleManagement",
					"description": "Update the navigation property directory in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory"
						}
					}
				},
				{
					"name": "Role Management Directory List Resource Namespaces",
					"value": "Role Management Directory List Resource Namespaces",
					"action": "List resourceNamespaces",
					"description": "Get a list of the unifiedRbacResourceNamespace objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Directory Create Resource Namespaces",
					"value": "Role Management Directory Create Resource Namespaces",
					"action": "Create new navigation property to resourceNamespaces for roleManagement",
					"description": "Create new navigation property to resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Resource Namespaces",
					"value": "Role Management Directory Delete Resource Namespaces",
					"action": "Delete navigation property resourceNamespaces for roleManagement",
					"description": "Delete navigation property resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Resource Namespaces",
					"value": "Role Management Directory Get Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Resource Namespaces",
					"value": "Role Management Directory Update Resource Namespaces",
					"action": "Update the navigation property resourceNamespaces in roleManagement",
					"description": "Update the navigation property resourceNamespaces in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces List Resource Actions",
					"value": "Role Management Directory Resource Namespaces List Resource Actions",
					"action": "List resourceActions",
					"description": "Get a list of the unifiedRbacResourceAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Create Resource Actions",
					"value": "Role Management Directory Resource Namespaces Create Resource Actions",
					"action": "Create new navigation property to resourceActions for roleManagement",
					"description": "Create new navigation property to resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Delete Resource Actions",
					"value": "Role Management Directory Resource Namespaces Delete Resource Actions",
					"action": "Delete navigation property resourceActions for roleManagement",
					"description": "Delete navigation property resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Get Resource Actions",
					"value": "Role Management Directory Resource Namespaces Get Resource Actions",
					"action": "Get resourceActions from roleManagement",
					"description": "Operations that an authorized principal are allowed to perform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Update Resource Actions",
					"value": "Role Management Directory Resource Namespaces Update Resource Actions",
					"action": "Update the navigation property resourceActions in roleManagement",
					"description": "Update the navigation property resourceActions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Resource Actions Delete Resource Scope",
					"value": "Role Management Directory Resource Namespaces Resource Actions Delete Resource Scope",
					"action": "Delete navigation property resourceScope for roleManagement",
					"description": "Delete navigation property resourceScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Resource Actions Get Resource Scope",
					"value": "Role Management Directory Resource Namespaces Resource Actions Get Resource Scope",
					"action": "Get resourceScope from roleManagement",
					"description": "Get resourceScope from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Resource Actions Update Resource Scope",
					"value": "Role Management Directory Resource Namespaces Resource Actions Update Resource Scope",
					"action": "Update the navigation property resourceScope in roleManagement",
					"description": "Update the navigation property resourceScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Assignment Approvals",
					"value": "Role Management Directory List Role Assignment Approvals",
					"action": "Get roleAssignmentApprovals from roleManagement",
					"description": "Get roleAssignmentApprovals from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentApprovals"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Assignment Approvals",
					"value": "Role Management Directory Create Role Assignment Approvals",
					"action": "Create new navigation property to roleAssignmentApprovals for roleManagement",
					"description": "Create new navigation property to roleAssignmentApprovals for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentApprovals"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Assignment Approvals",
					"value": "Role Management Directory Delete Role Assignment Approvals",
					"action": "Delete navigation property roleAssignmentApprovals for roleManagement",
					"description": "Delete navigation property roleAssignmentApprovals for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Assignment Approvals",
					"value": "Role Management Directory Get Role Assignment Approvals",
					"action": "Get roleAssignmentApprovals from roleManagement",
					"description": "Get roleAssignmentApprovals from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Assignment Approvals",
					"value": "Role Management Directory Update Role Assignment Approvals",
					"action": "Update the navigation property roleAssignmentApprovals in roleManagement",
					"description": "Update the navigation property roleAssignmentApprovals in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals List Steps",
					"value": "Role Management Directory Role Assignment Approvals List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals Create Steps",
					"value": "Role Management Directory Role Assignment Approvals Create Steps",
					"action": "Create new navigation property to steps for roleManagement",
					"description": "Create new navigation property to steps for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals Delete Steps",
					"value": "Role Management Directory Role Assignment Approvals Delete Steps",
					"action": "Delete navigation property steps for roleManagement",
					"description": "Delete navigation property steps for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals Get Steps",
					"value": "Role Management Directory Role Assignment Approvals Get Steps",
					"action": "Get steps from roleManagement",
					"description": "Get steps from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals Update Steps",
					"value": "Role Management Directory Role Assignment Approvals Update Steps",
					"action": "Update the navigation property steps in roleManagement",
					"description": "Update the navigation property steps in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Assignment Schedule Instances",
					"value": "Role Management Directory List Role Assignment Schedule Instances",
					"action": "List roleAssignmentScheduleInstances",
					"description": "Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Assignment Schedule Instances",
					"value": "Role Management Directory Create Role Assignment Schedule Instances",
					"action": "Create new navigation property to roleAssignmentScheduleInstances for roleManagement",
					"description": "Create new navigation property to roleAssignmentScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Assignment Schedule Instances",
					"value": "Role Management Directory Delete Role Assignment Schedule Instances",
					"action": "Delete navigation property roleAssignmentScheduleInstances for roleManagement",
					"description": "Delete navigation property roleAssignmentScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Assignment Schedule Instances",
					"value": "Role Management Directory Get Role Assignment Schedule Instances",
					"action": "Get roleAssignmentScheduleInstances from roleManagement",
					"description": "Get roleAssignmentScheduleInstances from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Assignment Schedule Instances",
					"value": "Role Management Directory Update Role Assignment Schedule Instances",
					"action": "Update the navigation property roleAssignmentScheduleInstances in roleManagement",
					"description": "Update the navigation property roleAssignmentScheduleInstances in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Instances Get Activated Using",
					"value": "Role Management Directory Role Assignment Schedule Instances Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Assignment Schedule Requests",
					"value": "Role Management Directory List Role Assignment Schedule Requests",
					"action": "List roleAssignmentScheduleRequests",
					"description": "Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Assignment Schedule Requests",
					"value": "Role Management Directory Create Role Assignment Schedule Requests",
					"action": "Create roleAssignmentScheduleRequests",
					"description": "Create a new unifiedRoleAssignmentScheduleRequest object. This operation allows both admins and users to add, remove, extend, or renew assignments. To run this request, the calling user must have multi-factor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Azure AD Multi-Factor Authentication to secure sign-in events.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Assignment Schedule Requests",
					"value": "Role Management Directory Delete Role Assignment Schedule Requests",
					"action": "Delete navigation property roleAssignmentScheduleRequests for roleManagement",
					"description": "Delete navigation property roleAssignmentScheduleRequests for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Assignment Schedule Requests",
					"value": "Role Management Directory Get Role Assignment Schedule Requests",
					"action": "Get roleAssignmentScheduleRequests from roleManagement",
					"description": "Get roleAssignmentScheduleRequests from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Assignment Schedule Requests",
					"value": "Role Management Directory Update Role Assignment Schedule Requests",
					"action": "Update the navigation property roleAssignmentScheduleRequests in roleManagement",
					"description": "Update the navigation property roleAssignmentScheduleRequests in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get Activated Using",
					"value": "Role Management Directory Role Assignment Schedule Requests Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get App Scope",
					"value": "Role Management Directory Role Assignment Schedule Requests Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get Directory Scope",
					"value": "Role Management Directory Role Assignment Schedule Requests Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get Principal",
					"value": "Role Management Directory Role Assignment Schedule Requests Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The principal that's getting a role assignment through the request. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get Role Definition",
					"value": "Role Management Directory Role Assignment Schedule Requests Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Get Target Schedule",
					"value": "Role Management Directory Role Assignment Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from roleManagement",
					"description": "The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Assignment Schedules",
					"value": "Role Management Directory List Role Assignment Schedules",
					"action": "List roleAssignmentSchedules",
					"description": "Get the schedules for active role assignment operations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentSchedules"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Assignment Schedules",
					"value": "Role Management Directory Create Role Assignment Schedules",
					"action": "Create new navigation property to roleAssignmentSchedules for roleManagement",
					"description": "Create new navigation property to roleAssignmentSchedules for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentSchedules"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Assignment Schedules",
					"value": "Role Management Directory Delete Role Assignment Schedules",
					"action": "Delete navigation property roleAssignmentSchedules for roleManagement",
					"description": "Delete navigation property roleAssignmentSchedules for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Assignment Schedules",
					"value": "Role Management Directory Get Role Assignment Schedules",
					"action": "Get roleAssignmentSchedules from roleManagement",
					"description": "Get roleAssignmentSchedules from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Assignment Schedules",
					"value": "Role Management Directory Update Role Assignment Schedules",
					"action": "Update the navigation property roleAssignmentSchedules in roleManagement",
					"description": "Update the navigation property roleAssignmentSchedules in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedules Get Activated Using",
					"value": "Role Management Directory Role Assignment Schedules Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Assignments",
					"value": "Role Management Directory List Role Assignments",
					"action": "List unifiedRoleAssignments",
					"description": "Get a list of unifiedRoleAssignment objects for the provider. The following RBAC providers are currently supported:\n- directory (Azure AD)\n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Assignments",
					"value": "Role Management Directory Create Role Assignments",
					"action": "Create unifiedRoleAssignment",
					"description": "Create a new unifiedRoleAssignment object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Assignments",
					"value": "Role Management Directory Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for roleManagement",
					"description": "Delete navigation property roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Assignments",
					"value": "Role Management Directory Get Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Assignments",
					"value": "Role Management Directory Update Role Assignments",
					"action": "Update the navigation property roleAssignments in roleManagement",
					"description": "Update the navigation property roleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Delete App Scope",
					"value": "Role Management Directory Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Get App Scope",
					"value": "Role Management Directory Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Update App Scope",
					"value": "Role Management Directory Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Get Directory Scope",
					"value": "Role Management Directory Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Get Principal",
					"value": "Role Management Directory Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignments Get Role Definition",
					"value": "Role Management Directory Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Definitions",
					"value": "Role Management Directory List Role Definitions",
					"action": "List roleDefinitions",
					"description": "Get a list of unifiedRoleDefinition objects for an RBAC provider. The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune)\n- directory (Azure AD) \n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Definitions",
					"value": "Role Management Directory Create Role Definitions",
					"action": "Create roleDefinitions",
					"description": "Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires an Azure AD Premium P1 or P2 license. The following RBAC providers are currently supported:\n- Cloud PC\n- device management (Intune)\n- directory (Azure AD)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Definitions",
					"value": "Role Management Directory Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for roleManagement",
					"description": "Delete navigation property roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Definitions",
					"value": "Role Management Directory Get Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Definitions",
					"value": "Role Management Directory Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in roleManagement",
					"description": "Update the navigation property roleDefinitions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions List Inherits Permissions From",
					"value": "Role Management Directory Role Definitions List Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Create Inherits Permissions From",
					"value": "Role Management Directory Role Definitions Create Inherits Permissions From",
					"action": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"description": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Delete Inherits Permissions From",
					"value": "Role Management Directory Role Definitions Delete Inherits Permissions From",
					"action": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"description": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Get Inherits Permissions From",
					"value": "Role Management Directory Role Definitions Get Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Update Inherits Permissions From",
					"value": "Role Management Directory Role Definitions Update Inherits Permissions From",
					"action": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"description": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Eligibility Schedule Instances",
					"value": "Role Management Directory List Role Eligibility Schedule Instances",
					"action": "List roleEligibilityScheduleInstancess",
					"description": "Get a list of the unifiedRoleEligibilityScheduleInstance objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Eligibility Schedule Instances",
					"value": "Role Management Directory Create Role Eligibility Schedule Instances",
					"action": "Create new navigation property to roleEligibilityScheduleInstances for roleManagement",
					"description": "Create new navigation property to roleEligibilityScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Eligibility Schedule Instances",
					"value": "Role Management Directory Delete Role Eligibility Schedule Instances",
					"action": "Delete navigation property roleEligibilityScheduleInstances for roleManagement",
					"description": "Delete navigation property roleEligibilityScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Eligibility Schedule Instances",
					"value": "Role Management Directory Get Role Eligibility Schedule Instances",
					"action": "Get roleEligibilityScheduleInstances from roleManagement",
					"description": "Get roleEligibilityScheduleInstances from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Eligibility Schedule Instances",
					"value": "Role Management Directory Update Role Eligibility Schedule Instances",
					"action": "Update the navigation property roleEligibilityScheduleInstances in roleManagement",
					"description": "Update the navigation property roleEligibilityScheduleInstances in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Eligibility Schedule Requests",
					"value": "Role Management Directory List Role Eligibility Schedule Requests",
					"action": "List roleEligibilityScheduleRequests",
					"description": "Get a list of the unifiedRoleEligibilityScheduleRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Eligibility Schedule Requests",
					"value": "Role Management Directory Create Role Eligibility Schedule Requests",
					"action": "Create roleEligibilityScheduleRequests",
					"description": "Create a new unifiedRoleEligibilityScheduleRequest object. This operation allows both admins and eligible users to add, revoke, or extend eligible assignments.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Eligibility Schedule Requests",
					"value": "Role Management Directory Delete Role Eligibility Schedule Requests",
					"action": "Delete navigation property roleEligibilityScheduleRequests for roleManagement",
					"description": "Delete navigation property roleEligibilityScheduleRequests for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Eligibility Schedule Requests",
					"value": "Role Management Directory Get Role Eligibility Schedule Requests",
					"action": "Get roleEligibilityScheduleRequests from roleManagement",
					"description": "Get roleEligibilityScheduleRequests from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Eligibility Schedule Requests",
					"value": "Role Management Directory Update Role Eligibility Schedule Requests",
					"action": "Update the navigation property roleEligibilityScheduleRequests in roleManagement",
					"description": "Update the navigation property roleEligibilityScheduleRequests in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Get App Scope",
					"value": "Role Management Directory Role Eligibility Schedule Requests Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Read-only property with details of the app-specific scope when the role eligibility is scoped to an app. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Get Directory Scope",
					"value": "Role Management Directory Role Eligibility Schedule Requests Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the role eligibility. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Get Principal",
					"value": "Role Management Directory Role Eligibility Schedule Requests Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The principal that's getting a role eligibility through the request. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Get Role Definition",
					"value": "Role Management Directory Role Eligibility Schedule Requests Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Get Target Schedule",
					"value": "Role Management Directory Role Eligibility Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from roleManagement",
					"description": "The schedule for a role eligibility that is referenced through the targetScheduleId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Role Management Directory List Role Eligibility Schedules",
					"value": "Role Management Directory List Role Eligibility Schedules",
					"action": "List roleEligibilitySchedules",
					"description": "Get a list of the unifiedRoleEligibilitySchedule objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilitySchedules"
						}
					}
				},
				{
					"name": "Role Management Directory Create Role Eligibility Schedules",
					"value": "Role Management Directory Create Role Eligibility Schedules",
					"action": "Create new navigation property to roleEligibilitySchedules for roleManagement",
					"description": "Create new navigation property to roleEligibilitySchedules for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleEligibilitySchedules"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Role Eligibility Schedules",
					"value": "Role Management Directory Delete Role Eligibility Schedules",
					"action": "Delete navigation property roleEligibilitySchedules for roleManagement",
					"description": "Delete navigation property roleEligibilitySchedules for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Role Eligibility Schedules",
					"value": "Role Management Directory Get Role Eligibility Schedules",
					"action": "Get roleEligibilitySchedules from roleManagement",
					"description": "Get roleEligibilitySchedules from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Role Eligibility Schedules",
					"value": "Role Management Directory Update Role Eligibility Schedules",
					"action": "Update the navigation property roleEligibilitySchedules in roleManagement",
					"description": "Update the navigation property roleEligibilitySchedules in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory List Transitive Role Assignments",
					"value": "Role Management Directory List Transitive Role Assignments",
					"action": "List transitiveRoleAssignment",
					"description": "Get the list of direct and transitive unifiedRoleAssignment objects for a specific principal. For example, if a user is assigned an Azure AD role through group membership, the role assignment is transitive, and this request will list the group's ID as the **principalId**. Results can also be filtered by the **roleDefinitionId** and **directoryScopeId**. Supported only for directory (Azure AD) provider. For more information, see Use Azure AD groups to manage role assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Directory Create Transitive Role Assignments",
					"value": "Role Management Directory Create Transitive Role Assignments",
					"action": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"description": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Directory Delete Transitive Role Assignments",
					"value": "Role Management Directory Delete Transitive Role Assignments",
					"action": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"description": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Get Transitive Role Assignments",
					"value": "Role Management Directory Get Transitive Role Assignments",
					"action": "Get transitiveRoleAssignments from roleManagement",
					"description": "Get transitiveRoleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Update Transitive Role Assignments",
					"value": "Role Management Directory Update Transitive Role Assignments",
					"action": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"description": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Delete App Scope",
					"value": "Role Management Directory Transitive Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Get App Scope",
					"value": "Role Management Directory Transitive Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Update App Scope",
					"value": "Role Management Directory Transitive Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Get Directory Scope",
					"value": "Role Management Directory Transitive Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Get Principal",
					"value": "Role Management Directory Transitive Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Directory Transitive Role Assignments Get Role Definition",
					"value": "Role Management Directory Transitive Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Delete Entitlement Management",
					"value": "Role Management Delete Entitlement Management",
					"action": "Delete navigation property entitlementManagement for roleManagement",
					"description": "Delete navigation property entitlementManagement for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement"
						}
					}
				},
				{
					"name": "Role Management Get Entitlement Management",
					"value": "Role Management Get Entitlement Management",
					"action": "Get entitlementManagement from roleManagement",
					"description": "The RbacApplication for Entitlement Management",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement"
						}
					}
				},
				{
					"name": "Role Management Update Entitlement Management",
					"value": "Role Management Update Entitlement Management",
					"action": "Update the navigation property entitlementManagement in roleManagement",
					"description": "Update the navigation property entitlementManagement in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Resource Namespaces",
					"value": "Role Management Entitlement Management List Resource Namespaces",
					"action": "List resourceNamespaces",
					"description": "Get a list of the unifiedRbacResourceNamespace objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Resource Namespaces",
					"value": "Role Management Entitlement Management Create Resource Namespaces",
					"action": "Create new navigation property to resourceNamespaces for roleManagement",
					"description": "Create new navigation property to resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Resource Namespaces",
					"value": "Role Management Entitlement Management Delete Resource Namespaces",
					"action": "Delete navigation property resourceNamespaces for roleManagement",
					"description": "Delete navigation property resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Resource Namespaces",
					"value": "Role Management Entitlement Management Get Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Resource Namespaces",
					"value": "Role Management Entitlement Management Update Resource Namespaces",
					"action": "Update the navigation property resourceNamespaces in roleManagement",
					"description": "Update the navigation property resourceNamespaces in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces List Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces List Resource Actions",
					"action": "List resourceActions",
					"description": "Get a list of the unifiedRbacResourceAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Create Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces Create Resource Actions",
					"action": "Create new navigation property to resourceActions for roleManagement",
					"description": "Create new navigation property to resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Delete Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces Delete Resource Actions",
					"action": "Delete navigation property resourceActions for roleManagement",
					"description": "Delete navigation property resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Get Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces Get Resource Actions",
					"action": "Get resourceActions from roleManagement",
					"description": "Operations that an authorized principal are allowed to perform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Update Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces Update Resource Actions",
					"action": "Update the navigation property resourceActions in roleManagement",
					"description": "Update the navigation property resourceActions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Resource Actions Delete Resource Scope",
					"value": "Role Management Entitlement Management Resource Namespaces Resource Actions Delete Resource Scope",
					"action": "Delete navigation property resourceScope for roleManagement",
					"description": "Delete navigation property resourceScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Resource Actions Get Resource Scope",
					"value": "Role Management Entitlement Management Resource Namespaces Resource Actions Get Resource Scope",
					"action": "Get resourceScope from roleManagement",
					"description": "Get resourceScope from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Resource Actions Update Resource Scope",
					"value": "Role Management Entitlement Management Resource Namespaces Resource Actions Update Resource Scope",
					"action": "Update the navigation property resourceScope in roleManagement",
					"description": "Update the navigation property resourceScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Assignment Approvals",
					"value": "Role Management Entitlement Management List Role Assignment Approvals",
					"action": "Get roleAssignmentApprovals from roleManagement",
					"description": "Get roleAssignmentApprovals from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Assignment Approvals",
					"value": "Role Management Entitlement Management Create Role Assignment Approvals",
					"action": "Create new navigation property to roleAssignmentApprovals for roleManagement",
					"description": "Create new navigation property to roleAssignmentApprovals for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Assignment Approvals",
					"value": "Role Management Entitlement Management Delete Role Assignment Approvals",
					"action": "Delete navigation property roleAssignmentApprovals for roleManagement",
					"description": "Delete navigation property roleAssignmentApprovals for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Assignment Approvals",
					"value": "Role Management Entitlement Management Get Role Assignment Approvals",
					"action": "Get roleAssignmentApprovals from roleManagement",
					"description": "Get roleAssignmentApprovals from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Assignment Approvals",
					"value": "Role Management Entitlement Management Update Role Assignment Approvals",
					"action": "Update the navigation property roleAssignmentApprovals in roleManagement",
					"description": "Update the navigation property roleAssignmentApprovals in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals List Steps",
					"value": "Role Management Entitlement Management Role Assignment Approvals List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals Create Steps",
					"value": "Role Management Entitlement Management Role Assignment Approvals Create Steps",
					"action": "Create new navigation property to steps for roleManagement",
					"description": "Create new navigation property to steps for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals Delete Steps",
					"value": "Role Management Entitlement Management Role Assignment Approvals Delete Steps",
					"action": "Delete navigation property steps for roleManagement",
					"description": "Delete navigation property steps for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals Get Steps",
					"value": "Role Management Entitlement Management Role Assignment Approvals Get Steps",
					"action": "Get steps from roleManagement",
					"description": "Get steps from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals Update Steps",
					"value": "Role Management Entitlement Management Role Assignment Approvals Update Steps",
					"action": "Update the navigation property steps in roleManagement",
					"description": "Update the navigation property steps in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Assignment Schedule Instances",
					"value": "Role Management Entitlement Management List Role Assignment Schedule Instances",
					"action": "List roleAssignmentScheduleInstances",
					"description": "Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Assignment Schedule Instances",
					"value": "Role Management Entitlement Management Create Role Assignment Schedule Instances",
					"action": "Create new navigation property to roleAssignmentScheduleInstances for roleManagement",
					"description": "Create new navigation property to roleAssignmentScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Assignment Schedule Instances",
					"value": "Role Management Entitlement Management Delete Role Assignment Schedule Instances",
					"action": "Delete navigation property roleAssignmentScheduleInstances for roleManagement",
					"description": "Delete navigation property roleAssignmentScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Assignment Schedule Instances",
					"value": "Role Management Entitlement Management Get Role Assignment Schedule Instances",
					"action": "Get roleAssignmentScheduleInstances from roleManagement",
					"description": "Get roleAssignmentScheduleInstances from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Assignment Schedule Instances",
					"value": "Role Management Entitlement Management Update Role Assignment Schedule Instances",
					"action": "Update the navigation property roleAssignmentScheduleInstances in roleManagement",
					"description": "Update the navigation property roleAssignmentScheduleInstances in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Instances Get Activated Using",
					"value": "Role Management Entitlement Management Role Assignment Schedule Instances Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{{$parameter[\"unifiedRoleAssignmentScheduleInstance-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Assignment Schedule Requests",
					"value": "Role Management Entitlement Management List Role Assignment Schedule Requests",
					"action": "List roleAssignmentScheduleRequests",
					"description": "Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Assignment Schedule Requests",
					"value": "Role Management Entitlement Management Create Role Assignment Schedule Requests",
					"action": "Create roleAssignmentScheduleRequests",
					"description": "Create a new unifiedRoleAssignmentScheduleRequest object. This operation allows both admins and users to add, remove, extend, or renew assignments. To run this request, the calling user must have multi-factor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Azure AD Multi-Factor Authentication to secure sign-in events.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Assignment Schedule Requests",
					"value": "Role Management Entitlement Management Delete Role Assignment Schedule Requests",
					"action": "Delete navigation property roleAssignmentScheduleRequests for roleManagement",
					"description": "Delete navigation property roleAssignmentScheduleRequests for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Assignment Schedule Requests",
					"value": "Role Management Entitlement Management Get Role Assignment Schedule Requests",
					"action": "Get roleAssignmentScheduleRequests from roleManagement",
					"description": "Get roleAssignmentScheduleRequests from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Assignment Schedule Requests",
					"value": "Role Management Entitlement Management Update Role Assignment Schedule Requests",
					"action": "Update the navigation property roleAssignmentScheduleRequests in roleManagement",
					"description": "Update the navigation property roleAssignmentScheduleRequests in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get Activated Using",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get App Scope",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get Directory Scope",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get Principal",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The principal that's getting a role assignment through the request. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get Role Definition",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Get Target Schedule",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from roleManagement",
					"description": "The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Assignment Schedules",
					"value": "Role Management Entitlement Management List Role Assignment Schedules",
					"action": "List roleAssignmentSchedules",
					"description": "Get the schedules for active role assignment operations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Assignment Schedules",
					"value": "Role Management Entitlement Management Create Role Assignment Schedules",
					"action": "Create new navigation property to roleAssignmentSchedules for roleManagement",
					"description": "Create new navigation property to roleAssignmentSchedules for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Assignment Schedules",
					"value": "Role Management Entitlement Management Delete Role Assignment Schedules",
					"action": "Delete navigation property roleAssignmentSchedules for roleManagement",
					"description": "Delete navigation property roleAssignmentSchedules for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Assignment Schedules",
					"value": "Role Management Entitlement Management Get Role Assignment Schedules",
					"action": "Get roleAssignmentSchedules from roleManagement",
					"description": "Get roleAssignmentSchedules from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Assignment Schedules",
					"value": "Role Management Entitlement Management Update Role Assignment Schedules",
					"action": "Update the navigation property roleAssignmentSchedules in roleManagement",
					"description": "Update the navigation property roleAssignmentSchedules in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedules Get Activated Using",
					"value": "Role Management Entitlement Management Role Assignment Schedules Get Activated Using",
					"action": "Get activatedUsing from roleManagement",
					"description": "If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules/{{$parameter[\"unifiedRoleAssignmentSchedule-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Assignments",
					"value": "Role Management Entitlement Management List Role Assignments",
					"action": "List unifiedRoleAssignments",
					"description": "Get a list of unifiedRoleAssignment objects for the provider. The following RBAC providers are currently supported:\n- directory (Azure AD)\n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Assignments",
					"value": "Role Management Entitlement Management Create Role Assignments",
					"action": "Create unifiedRoleAssignment",
					"description": "Create a new unifiedRoleAssignment object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Assignments",
					"value": "Role Management Entitlement Management Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for roleManagement",
					"description": "Delete navigation property roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Assignments",
					"value": "Role Management Entitlement Management Get Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Assignments",
					"value": "Role Management Entitlement Management Update Role Assignments",
					"action": "Update the navigation property roleAssignments in roleManagement",
					"description": "Update the navigation property roleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Delete App Scope",
					"value": "Role Management Entitlement Management Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Get App Scope",
					"value": "Role Management Entitlement Management Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Update App Scope",
					"value": "Role Management Entitlement Management Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Get Directory Scope",
					"value": "Role Management Entitlement Management Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Get Principal",
					"value": "Role Management Entitlement Management Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignments Get Role Definition",
					"value": "Role Management Entitlement Management Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Definitions",
					"value": "Role Management Entitlement Management List Role Definitions",
					"action": "List roleDefinitions",
					"description": "Get a list of unifiedRoleDefinition objects for an RBAC provider. The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune)\n- directory (Azure AD) \n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Definitions",
					"value": "Role Management Entitlement Management Create Role Definitions",
					"action": "Create roleDefinitions",
					"description": "Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires an Azure AD Premium P1 or P2 license. The following RBAC providers are currently supported:\n- Cloud PC\n- device management (Intune)\n- directory (Azure AD)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Definitions",
					"value": "Role Management Entitlement Management Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for roleManagement",
					"description": "Delete navigation property roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Definitions",
					"value": "Role Management Entitlement Management Get Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Definitions",
					"value": "Role Management Entitlement Management Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in roleManagement",
					"description": "Update the navigation property roleDefinitions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions List Inherits Permissions From",
					"value": "Role Management Entitlement Management Role Definitions List Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Create Inherits Permissions From",
					"value": "Role Management Entitlement Management Role Definitions Create Inherits Permissions From",
					"action": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"description": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Delete Inherits Permissions From",
					"value": "Role Management Entitlement Management Role Definitions Delete Inherits Permissions From",
					"action": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"description": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Get Inherits Permissions From",
					"value": "Role Management Entitlement Management Role Definitions Get Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Update Inherits Permissions From",
					"value": "Role Management Entitlement Management Role Definitions Update Inherits Permissions From",
					"action": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"description": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Eligibility Schedule Instances",
					"value": "Role Management Entitlement Management List Role Eligibility Schedule Instances",
					"action": "List roleEligibilityScheduleInstancess",
					"description": "Get a list of the unifiedRoleEligibilityScheduleInstance objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Eligibility Schedule Instances",
					"value": "Role Management Entitlement Management Create Role Eligibility Schedule Instances",
					"action": "Create new navigation property to roleEligibilityScheduleInstances for roleManagement",
					"description": "Create new navigation property to roleEligibilityScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Eligibility Schedule Instances",
					"value": "Role Management Entitlement Management Delete Role Eligibility Schedule Instances",
					"action": "Delete navigation property roleEligibilityScheduleInstances for roleManagement",
					"description": "Delete navigation property roleEligibilityScheduleInstances for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Eligibility Schedule Instances",
					"value": "Role Management Entitlement Management Get Role Eligibility Schedule Instances",
					"action": "Get roleEligibilityScheduleInstances from roleManagement",
					"description": "Get roleEligibilityScheduleInstances from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Eligibility Schedule Instances",
					"value": "Role Management Entitlement Management Update Role Eligibility Schedule Instances",
					"action": "Update the navigation property roleEligibilityScheduleInstances in roleManagement",
					"description": "Update the navigation property roleEligibilityScheduleInstances in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{{$parameter[\"unifiedRoleEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Eligibility Schedule Requests",
					"value": "Role Management Entitlement Management List Role Eligibility Schedule Requests",
					"action": "List roleEligibilityScheduleRequests",
					"description": "Get a list of the unifiedRoleEligibilityScheduleRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Eligibility Schedule Requests",
					"value": "Role Management Entitlement Management Create Role Eligibility Schedule Requests",
					"action": "Create roleEligibilityScheduleRequests",
					"description": "Create a new unifiedRoleEligibilityScheduleRequest object. This operation allows both admins and eligible users to add, revoke, or extend eligible assignments.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Eligibility Schedule Requests",
					"value": "Role Management Entitlement Management Delete Role Eligibility Schedule Requests",
					"action": "Delete navigation property roleEligibilityScheduleRequests for roleManagement",
					"description": "Delete navigation property roleEligibilityScheduleRequests for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Eligibility Schedule Requests",
					"value": "Role Management Entitlement Management Get Role Eligibility Schedule Requests",
					"action": "Get roleEligibilityScheduleRequests from roleManagement",
					"description": "Get roleEligibilityScheduleRequests from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Eligibility Schedule Requests",
					"value": "Role Management Entitlement Management Update Role Eligibility Schedule Requests",
					"action": "Update the navigation property roleEligibilityScheduleRequests in roleManagement",
					"description": "Update the navigation property roleEligibilityScheduleRequests in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Get App Scope",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Read-only property with details of the app-specific scope when the role eligibility is scoped to an app. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Directory Scope",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the role eligibility. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Principal",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The principal that's getting a role eligibility through the request. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Role Definition",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Target Schedule",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from roleManagement",
					"description": "The schedule for a role eligibility that is referenced through the targetScheduleId property. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Role Eligibility Schedules",
					"value": "Role Management Entitlement Management List Role Eligibility Schedules",
					"action": "List roleEligibilitySchedules",
					"description": "Get a list of the unifiedRoleEligibilitySchedule objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Role Eligibility Schedules",
					"value": "Role Management Entitlement Management Create Role Eligibility Schedules",
					"action": "Create new navigation property to roleEligibilitySchedules for roleManagement",
					"description": "Create new navigation property to roleEligibilitySchedules for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Role Eligibility Schedules",
					"value": "Role Management Entitlement Management Delete Role Eligibility Schedules",
					"action": "Delete navigation property roleEligibilitySchedules for roleManagement",
					"description": "Delete navigation property roleEligibilitySchedules for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Role Eligibility Schedules",
					"value": "Role Management Entitlement Management Get Role Eligibility Schedules",
					"action": "Get roleEligibilitySchedules from roleManagement",
					"description": "Get roleEligibilitySchedules from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Role Eligibility Schedules",
					"value": "Role Management Entitlement Management Update Role Eligibility Schedules",
					"action": "Update the navigation property roleEligibilitySchedules in roleManagement",
					"description": "Update the navigation property roleEligibilitySchedules in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules/{{$parameter[\"unifiedRoleEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management List Transitive Role Assignments",
					"value": "Role Management Entitlement Management List Transitive Role Assignments",
					"action": "List transitiveRoleAssignment",
					"description": "Get the list of direct and transitive unifiedRoleAssignment objects for a specific principal. For example, if a user is assigned an Azure AD role through group membership, the role assignment is transitive, and this request will list the group's ID as the **principalId**. Results can also be filtered by the **roleDefinitionId** and **directoryScopeId**. Supported only for directory (Azure AD) provider. For more information, see Use Azure AD groups to manage role assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Create Transitive Role Assignments",
					"value": "Role Management Entitlement Management Create Transitive Role Assignments",
					"action": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"description": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Delete Transitive Role Assignments",
					"value": "Role Management Entitlement Management Delete Transitive Role Assignments",
					"action": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"description": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Get Transitive Role Assignments",
					"value": "Role Management Entitlement Management Get Transitive Role Assignments",
					"action": "Get transitiveRoleAssignments from roleManagement",
					"description": "Get transitiveRoleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Update Transitive Role Assignments",
					"value": "Role Management Entitlement Management Update Transitive Role Assignments",
					"action": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"description": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Delete App Scope",
					"value": "Role Management Entitlement Management Transitive Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Get App Scope",
					"value": "Role Management Entitlement Management Transitive Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Update App Scope",
					"value": "Role Management Entitlement Management Transitive Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Get Directory Scope",
					"value": "Role Management Entitlement Management Transitive Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Get Principal",
					"value": "Role Management Entitlement Management Transitive Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Transitive Role Assignments Get Role Definition",
					"value": "Role Management Entitlement Management Transitive Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /roleManagement/directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Delete Directory"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Delete Directory"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Directory"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Directory"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Directory"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Update Directory"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Update Directory"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/resourceNamespaces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces List Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Delete Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Delete Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Get Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Delete Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Delete Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Get Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentApprovals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentApprovals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentApprovals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Delete Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Get Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Get Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentSchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Delete App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions List Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Delete Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Delete Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Get Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilityScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilityScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilitySchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory List Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/transitiveRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Delete Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Get Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Delete App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Directory Transitive Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Delete Entitlement Management"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Delete Entitlement Management"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Entitlement Management"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Entitlement Management"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Get Entitlement Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Update Entitlement Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Update Entitlement Management"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/resourceNamespaces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Resource Namespaces"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces List Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Delete Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Delete Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Get Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Delete Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Delete Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Get Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentApprovals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentApprovals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentApprovals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Approvals"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Delete Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Get Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Get Steps"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentSchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Get Activated Using"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Delete App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Definitions"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions List Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Delete Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Delete Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Get Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilityScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Instances"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilityScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Requests"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Target Schedule"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilitySchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedules"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Role Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management List Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/transitiveRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Delete Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Transitive Role Assignments"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Get Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Delete App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get App Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Directory Scope"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Principal"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Role Definition"
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
						"Role Management Rbac Application"
					],
					"operation": [
						"Role Management Entitlement Management Transitive Role Assignments Get Role Definition"
					]
				}
			}
		},
];
