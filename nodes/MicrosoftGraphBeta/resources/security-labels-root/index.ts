import type { INodeProperties } from 'n8n-workflow';

export const securityLabelsRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Labels",
					"value": "Security Delete Labels",
					"action": "Delete navigation property labels for security",
					"description": "Delete navigation property labels for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/labels"
						}
					}
				},
				{
					"name": "Security Get Labels",
					"value": "Security Get Labels",
					"action": "Get labels from security",
					"description": "Get labels from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels"
						}
					}
				},
				{
					"name": "Security Update Labels",
					"value": "Security Update Labels",
					"action": "Update the navigation property labels in security",
					"description": "Update the navigation property labels in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/labels"
						}
					}
				},
				{
					"name": "Security Labels List Retention Labels",
					"value": "Security Labels List Retention Labels",
					"action": "List retentionLabels",
					"description": "Get a list of the retentionLabel objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels/retentionLabels"
						}
					}
				},
				{
					"name": "Security Labels Create Retention Labels",
					"value": "Security Labels Create Retention Labels",
					"action": "Create retentionLabel",
					"description": "Create a new retentionLabel object. To create a disposition review stage, include the **actionAfterRetentionPeriod** property in the request body with one of the possible values specified.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/labels/retentionLabels"
						}
					}
				},
				{
					"name": "Security Labels Delete Retention Labels",
					"value": "Security Labels Delete Retention Labels",
					"action": "Delete navigation property retentionLabels for security",
					"description": "Delete navigation property retentionLabels for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Get Retention Labels",
					"value": "Security Labels Get Retention Labels",
					"action": "Get retentionLabels from security",
					"description": "Get retentionLabels from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Update Retention Labels",
					"value": "Security Labels Update Retention Labels",
					"action": "Update the navigation property retentionLabels in security",
					"description": "Update the navigation property retentionLabels in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels List Disposition Review Stages",
					"value": "Security Labels Retention Labels List Disposition Review Stages",
					"action": "Get dispositionReviewStages from security",
					"description": "Review stages during which reviewers are notified to determine whether a document must be deleted or retained.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/dispositionReviewStages"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels Create Disposition Review Stages",
					"value": "Security Labels Retention Labels Create Disposition Review Stages",
					"action": "Create new navigation property to dispositionReviewStages for security",
					"description": "Create new navigation property to dispositionReviewStages for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/dispositionReviewStages"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels Delete Disposition Review Stages",
					"value": "Security Labels Retention Labels Delete Disposition Review Stages",
					"action": "Delete navigation property dispositionReviewStages for security",
					"description": "Delete navigation property dispositionReviewStages for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/dispositionReviewStages/{{$parameter[\"dispositionReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels Get Disposition Review Stages",
					"value": "Security Labels Retention Labels Get Disposition Review Stages",
					"action": "Get dispositionReviewStages from security",
					"description": "Review stages during which reviewers are notified to determine whether a document must be deleted or retained.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/dispositionReviewStages/{{$parameter[\"dispositionReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels Update Disposition Review Stages",
					"value": "Security Labels Retention Labels Update Disposition Review Stages",
					"action": "Update the navigation property dispositionReviewStages in security",
					"description": "Update the navigation property dispositionReviewStages in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/dispositionReviewStages/{{$parameter[\"dispositionReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Security Labels Retention Labels Get Retention Event Type",
					"value": "Security Labels Retention Labels Get Retention Event Type",
					"action": "Get retentionEventType from security",
					"description": "Get retentionEventType from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/labels/retentionLabels/{{$parameter[\"retentionLabel-id\"]}}/retentionEventType"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Delete Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Delete Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Get Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Get Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Get Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Update Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Update Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels/retentionLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels List Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /security/labels/retentionLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Create Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /security/labels/retentionLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Create Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/labels/retentionLabels/{retentionLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Delete Retention Labels"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Delete Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels/retentionLabels/{retentionLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Get Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Get Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Get Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels/retentionLabels/{retentionLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Update Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels/retentionLabels/{retentionLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Update Retention Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels List Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Create Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Create Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Delete Disposition Review Stages"
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
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Delete Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Update Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Update Disposition Review Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Retention Event Type"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Retention Event Type"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Labels Root"
					],
					"operation": [
						"Security Labels Retention Labels Get Retention Event Type"
					]
				}
			}
		},
];
