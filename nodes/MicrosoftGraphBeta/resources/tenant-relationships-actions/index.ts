import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships Managed Tenants Managed Tenant Alerts Managed Tenant Alert Add User Input Log",
					"value": "Tenant Relationships Managed Tenants Managed Tenant Alerts Managed Tenant Alert Add User Input Log",
					"action": "Invoke action addUserInputLog",
					"description": "Invoke action addUserInputLog",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managedTenantAlerts/{{$parameter[\"managedTenantAlert-id\"]}}/microsoft.graph.managedTenants.addUserInputLog"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status",
					"value": "Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status",
					"action": "Invoke action changeDeploymentStatus",
					"description": "Invoke action changeDeploymentStatus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/microsoft.graph.managedTenants.changeDeploymentStatus"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Actions Management Action Apply",
					"value": "Tenant Relationships Managed Tenants Management Actions Management Action Apply",
					"action": "Invoke action apply",
					"description": "Applies a management action against a specific managed tenant. By performing this operation the appropriate configurations will be made and policies created. As example when applying the require multi-factor authentication for admins management action will create an Azure Active Directory conditional access policy that requires multi-factor authentication for all users that have been assigned an administrative directory role.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementActions/{{$parameter[\"managementAction-id\"]}}/microsoft.graph.managedTenants.apply"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status",
					"value": "Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status",
					"action": "Invoke action changeDeploymentStatus",
					"description": "Invoke action changeDeploymentStatus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/managementTemplateStepVersions/{{$parameter[\"managementTemplateStepVersion-id\"]}}/deployments/{{$parameter[\"managementTemplateStepDeployment-id\"]}}/microsoft.graph.managedTenants.changeDeploymentStatus"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Tenant Groups Tenant Search",
					"value": "Tenant Relationships Managed Tenants Tenant Groups Tenant Search",
					"action": "Invoke action tenantSearch",
					"description": "Invoke action tenantSearch",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantGroups/microsoft.graph.managedTenants.tenantSearch"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Assign Tag",
					"value": "Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Assign Tag",
					"action": "Invoke action assignTag",
					"description": "Assign the tenant tag to the specified managed tenants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantTags/{{$parameter[\"tenantTag-id\"]}}/microsoft.graph.managedTenants.assignTag"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Unassign Tag",
					"value": "Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Unassign Tag",
					"action": "Invoke action unassignTag",
					"description": "Un-assigns the tenant tag from the specified managed tenants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenantTags/{{$parameter[\"tenantTag-id\"]}}/microsoft.graph.managedTenants.unassignTag"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Tenants Tenant Offboard Tenant",
					"value": "Tenant Relationships Managed Tenants Tenants Tenant Offboard Tenant",
					"action": "Invoke action offboardTenant",
					"description": "Carries out the appropriate procedures to remove a managed tenant from the multi-tenant management platform. No relationships, such as commerce and delegate administrative privileges, will be impacted. The only change made by invoking this action is the tenant will be deprovisioned from the multi-tenant management platform.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenants/{{$parameter[\"tenant-id\"]}}/microsoft.graph.managedTenants.offboardTenant"
						}
					}
				},
				{
					"name": "Tenant Relationships Managed Tenants Tenants Tenant Reset Tenant Onboarding Status",
					"value": "Tenant Relationships Managed Tenants Tenants Tenant Reset Tenant Onboarding Status",
					"action": "Invoke action resetTenantOnboardingStatus",
					"description": "Carries out the appropriate procedures to reset the onboarding status for the managed tenant that was removed from the multi-tenant management platform using the offboardTenant action. By invoking this action the platform will attempt to onboard the managed tenant for management.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/managedTenants/tenants/{{$parameter[\"tenant-id\"]}}/microsoft.graph.managedTenants.resetTenantOnboardingStatus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/microsoft.graph.managedTenants.addUserInputLog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Managed Tenant Alert Add User Input Log"
					]
				}
			}
		},
		{
			"displayName": "Log Information",
			"name": "logInformation",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "logInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Managed Tenant Alerts Managed Tenant Alert Add User Input Log"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/microsoft.graph.managedTenants.changeDeploymentStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Management Action ID",
			"name": "managementActionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "managementActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Management Template ID",
			"name": "managementTemplateId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "managementTemplateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Management Template Version",
			"name": "managementTemplateVersion",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "managementTemplateVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID",
			"name": "tenantGroupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantGroupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
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
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Action Tenant Deployment Statuses Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementActions/{managementAction-id}/microsoft.graph.managedTenants.apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Exclude Groups",
			"name": "excludeGroups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "excludeGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Include All Users",
			"name": "includeAllUsers",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "includeAllUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Include Groups",
			"name": "includeGroups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "includeGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Management Template ID",
			"name": "managementTemplateId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "managementTemplateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID",
			"name": "tenantGroupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantGroupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
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
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Actions Management Action Apply"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/microsoft.graph.managedTenants.changeDeploymentStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Management Template Step ID",
			"name": "managementTemplateStepId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "managementTemplateStepId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
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
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Management Template Step Versions Management Template Step Version Deployments Management Template Step Deployment Change Deployment Status"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantGroups/microsoft.graph.managedTenants.tenantSearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Groups Tenant Search"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
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
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Groups Tenant Search"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}/microsoft.graph.managedTenants.assignTag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Assign Tag"
					]
				}
			}
		},
		{
			"displayName": "Tenant Ids",
			"name": "tenantIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenantIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Assign Tag"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}/microsoft.graph.managedTenants.unassignTag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Unassign Tag"
					]
				}
			}
		},
		{
			"displayName": "Tenant Ids",
			"name": "tenantIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenantIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenant Tags Tenant Tag Unassign Tag"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenants/{tenant-id}/microsoft.graph.managedTenants.offboardTenant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenants Tenant Offboard Tenant"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/managedTenants/tenants/{tenant-id}/microsoft.graph.managedTenants.resetTenantOnboardingStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Actions"
					],
					"operation": [
						"Tenant Relationships Managed Tenants Tenants Tenant Reset Tenant Onboarding Status"
					]
				}
			}
		},
];
