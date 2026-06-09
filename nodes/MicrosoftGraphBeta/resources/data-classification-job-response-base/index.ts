import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationJobResponseBaseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification List Classify File Jobs",
					"value": "Data Classification List Classify File Jobs",
					"action": "Get classifyFileJobs from dataClassification",
					"description": "Get classifyFileJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/classifyFileJobs"
						}
					}
				},
				{
					"name": "Data Classification Create Classify File Jobs",
					"value": "Data Classification Create Classify File Jobs",
					"action": "Create new navigation property to classifyFileJobs for dataClassification",
					"description": "Create new navigation property to classifyFileJobs for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/classifyFileJobs"
						}
					}
				},
				{
					"name": "Data Classification Delete Classify File Jobs",
					"value": "Data Classification Delete Classify File Jobs",
					"action": "Delete navigation property classifyFileJobs for dataClassification",
					"description": "Delete navigation property classifyFileJobs for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/classifyFileJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Classify File Jobs",
					"value": "Data Classification Get Classify File Jobs",
					"action": "Get classifyFileJobs from dataClassification",
					"description": "Get classifyFileJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/classifyFileJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Classify File Jobs",
					"value": "Data Classification Update Classify File Jobs",
					"action": "Update the navigation property classifyFileJobs in dataClassification",
					"description": "Update the navigation property classifyFileJobs in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/classifyFileJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification List Classify Text Jobs",
					"value": "Data Classification List Classify Text Jobs",
					"action": "Get classifyTextJobs from dataClassification",
					"description": "Get classifyTextJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/classifyTextJobs"
						}
					}
				},
				{
					"name": "Data Classification Create Classify Text Jobs",
					"value": "Data Classification Create Classify Text Jobs",
					"action": "Create new navigation property to classifyTextJobs for dataClassification",
					"description": "Create new navigation property to classifyTextJobs for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/classifyTextJobs"
						}
					}
				},
				{
					"name": "Data Classification Delete Classify Text Jobs",
					"value": "Data Classification Delete Classify Text Jobs",
					"action": "Delete navigation property classifyTextJobs for dataClassification",
					"description": "Delete navigation property classifyTextJobs for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/classifyTextJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Classify Text Jobs",
					"value": "Data Classification Get Classify Text Jobs",
					"action": "Get classifyTextJobs from dataClassification",
					"description": "Get classifyTextJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/classifyTextJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Classify Text Jobs",
					"value": "Data Classification Update Classify Text Jobs",
					"action": "Update the navigation property classifyTextJobs in dataClassification",
					"description": "Update the navigation property classifyTextJobs in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/classifyTextJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification List Evaluate Dlp Policies Jobs",
					"value": "Data Classification List Evaluate Dlp Policies Jobs",
					"action": "Get evaluateDlpPoliciesJobs from dataClassification",
					"description": "Get evaluateDlpPoliciesJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/evaluateDlpPoliciesJobs"
						}
					}
				},
				{
					"name": "Data Classification Create Evaluate Dlp Policies Jobs",
					"value": "Data Classification Create Evaluate Dlp Policies Jobs",
					"action": "Create new navigation property to evaluateDlpPoliciesJobs for dataClassification",
					"description": "Create new navigation property to evaluateDlpPoliciesJobs for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/evaluateDlpPoliciesJobs"
						}
					}
				},
				{
					"name": "Data Classification Delete Evaluate Dlp Policies Jobs",
					"value": "Data Classification Delete Evaluate Dlp Policies Jobs",
					"action": "Delete navigation property evaluateDlpPoliciesJobs for dataClassification",
					"description": "Delete navigation property evaluateDlpPoliciesJobs for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/evaluateDlpPoliciesJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Evaluate Dlp Policies Jobs",
					"value": "Data Classification Get Evaluate Dlp Policies Jobs",
					"action": "Get evaluateDlpPoliciesJobs from dataClassification",
					"description": "Get evaluateDlpPoliciesJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/evaluateDlpPoliciesJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Evaluate Dlp Policies Jobs",
					"value": "Data Classification Update Evaluate Dlp Policies Jobs",
					"action": "Update the navigation property evaluateDlpPoliciesJobs in dataClassification",
					"description": "Update the navigation property evaluateDlpPoliciesJobs in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/evaluateDlpPoliciesJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification List Evaluate Label Jobs",
					"value": "Data Classification List Evaluate Label Jobs",
					"action": "Get evaluateLabelJobs from dataClassification",
					"description": "Get evaluateLabelJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/evaluateLabelJobs"
						}
					}
				},
				{
					"name": "Data Classification Create Evaluate Label Jobs",
					"value": "Data Classification Create Evaluate Label Jobs",
					"action": "Create new navigation property to evaluateLabelJobs for dataClassification",
					"description": "Create new navigation property to evaluateLabelJobs for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/evaluateLabelJobs"
						}
					}
				},
				{
					"name": "Data Classification Delete Evaluate Label Jobs",
					"value": "Data Classification Delete Evaluate Label Jobs",
					"action": "Delete navigation property evaluateLabelJobs for dataClassification",
					"description": "Delete navigation property evaluateLabelJobs for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/evaluateLabelJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Evaluate Label Jobs",
					"value": "Data Classification Get Evaluate Label Jobs",
					"action": "Get evaluateLabelJobs from dataClassification",
					"description": "Get evaluateLabelJobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/evaluateLabelJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Evaluate Label Jobs",
					"value": "Data Classification Update Evaluate Label Jobs",
					"action": "Update the navigation property evaluateLabelJobs in dataClassification",
					"description": "Update the navigation property evaluateLabelJobs in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/evaluateLabelJobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification List Jobs",
					"value": "Data Classification List Jobs",
					"action": "Get jobs from dataClassification",
					"description": "Get jobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/jobs"
						}
					}
				},
				{
					"name": "Data Classification Create Jobs",
					"value": "Data Classification Create Jobs",
					"action": "Create new navigation property to jobs for dataClassification",
					"description": "Create new navigation property to jobs for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/jobs"
						}
					}
				},
				{
					"name": "Data Classification Delete Jobs",
					"value": "Data Classification Delete Jobs",
					"action": "Delete navigation property jobs for dataClassification",
					"description": "Delete navigation property jobs for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/jobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Jobs",
					"value": "Data Classification Get Jobs",
					"action": "Get jobs from dataClassification",
					"description": "Get jobs from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/jobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Jobs",
					"value": "Data Classification Update Jobs",
					"action": "Update the navigation property jobs in dataClassification",
					"description": "Update the navigation property jobs in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/jobs/{{$parameter[\"jobResponseBase-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification/classifyFileJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/classifyFileJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/classifyFileJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Classify File Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/classifyFileJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Classify File Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/classifyTextJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/classifyTextJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/classifyTextJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Classify Text Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/classifyTextJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Classify Text Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/evaluateDlpPoliciesJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/evaluateDlpPoliciesJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/evaluateDlpPoliciesJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Evaluate Dlp Policies Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Evaluate Dlp Policies Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/evaluateLabelJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/evaluateLabelJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/evaluateLabelJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Evaluate Label Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Evaluate Label Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification List Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/jobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/jobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Jobs"
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
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Delete Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/jobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/jobs/{jobResponseBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/jobs/{jobResponseBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Job Response Base"
					],
					"operation": [
						"Data Classification Update Jobs"
					]
				}
			}
		},
];
