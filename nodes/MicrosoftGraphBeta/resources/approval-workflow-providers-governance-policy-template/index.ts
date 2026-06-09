import type { INodeProperties } from 'n8n-workflow';

export const approvalWorkflowProvidersGovernancePolicyTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					]
				}
			},
			"options": [
				{
					"name": "Approval Workflow Providers List Policy Templates",
					"value": "Approval Workflow Providers List Policy Templates",
					"action": "Get policyTemplates from approvalWorkflowProviders",
					"description": "Get policyTemplates from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/policyTemplates"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Create Policy Templates",
					"value": "Approval Workflow Providers Create Policy Templates",
					"action": "Create new navigation property to policyTemplates for approvalWorkflowProviders",
					"description": "Create new navigation property to policyTemplates for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/policyTemplates"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Delete Policy Templates",
					"value": "Approval Workflow Providers Delete Policy Templates",
					"action": "Delete navigation property policyTemplates for approvalWorkflowProviders",
					"description": "Delete navigation property policyTemplates for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/policyTemplates/{{$parameter[\"governancePolicyTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Get Policy Templates",
					"value": "Approval Workflow Providers Get Policy Templates",
					"action": "Get policyTemplates from approvalWorkflowProviders",
					"description": "Get policyTemplates from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/policyTemplates/{{$parameter[\"governancePolicyTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Update Policy Templates",
					"value": "Approval Workflow Providers Update Policy Templates",
					"action": "Update the navigation property policyTemplates in approvalWorkflowProviders",
					"description": "Update the navigation property policyTemplates in approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/policyTemplates/{{$parameter[\"governancePolicyTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers List Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Create Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Create Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Delete Policy Templates"
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
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Delete Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Get Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Get Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Get Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Update Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Governance Policy Template"
					],
					"operation": [
						"Approval Workflow Providers Update Policy Templates"
					]
				}
			}
		},
];
